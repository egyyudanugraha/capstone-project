import Swal from 'sweetalert2';
import { compareAsc } from 'date-fns';
import ApptivityApi from '../../data/apptivity-api';
import { historyItemTable, pomodorItemTask, taskNotFound } from '../template/template-creator';
import NotificationHelper from '../../utils/notification-helper';

const Pomodoro = {
  allTask: null,
  _init() {
    const pomodoro = {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
      longBreakInterval: 4,
      sessions: 0,
      status: false,
      startDate: null,
    };
    if (!localStorage.getItem('pomodoro')) {
      localStorage.setItem('pomodoro', JSON.stringify(pomodoro));
    }
  },

  async render() {
    this._init();
    const tasks = await ApptivityApi.getAllTask('completed=false');
    this.allTask = tasks;
    return `<div class="grid gap-10">
    <div class="flex flex-col w-[90%] md:flex-row gap-3 m-auto">
      <div class="grid font-nunito rounded-md items-center justify-center w-full min-h-[60vh] max-h-[70vh]" id="box-time">
        <div class="flex m-2 justify-center text-white">
          <div class="mb-4 pt-5 pb-7 h-350 rounded-xl">
            <div class="flex justify-center flex-wrap gap-1" id="js-mode-buttons">
              <button class="text-sm md:text-base rounded-md py-1 px-3 bg-purple-600 border-b-4 border-purple-800" data-mode="pomodoro">Pomodoro</button>
              <button class="text-sm md:text-base rounded-md py-1 px-3" data-mode="shortBreak">Short Break</button>
              <button class="text-sm md:text-base rounded-md py-1 px-3" data-mode="longBreak">Long Break</button>
            </div>
            <div class="flex justify-center text-8xl md:text-9xl py-6" id="time-display">
              <span id="js-minutes">25</span>
              <span class="separator">:</span>
              <span id="js-seconds">00</span>
            </div>
            <div class="grid gap-4 justify-center">
              <button class="bg-amber-400 hover:bg-amber-500 border-b-4 py-4 w-[200px] border-amber-600 text-white text-lg font-extrabold rounded-md text-center" data-action="start" id="start-btn">START</button>
              <div class="grid gap-1 justify-center">
                <div class="session text-slate-50 text-center text-sm"></div>
                <span id="reset-session" class="text-slate-50 hover:underline text-center cursor-pointer text-sm">Reset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block rounded-md py-5 px-4 w-full min-h-[60vh] max-h-[70vh]" id="box-task">
        <div class="flex items-center my-0 flex-col gap-4">
          <p class="font-nunito font-extrabold text-white text-4xl m-auto">Tasks</p>
          <select
            id="filter"
            class="bg-white border-2 px-3 w-full md:w-[50%] md:justify-self-start border-slate-200 dark:bg-slate-50 rounded-md dark:border-0 focus:ring-0 text-sm placeholder:text-slate-600 dark:placeholder:text-slate-800 text-slate-800 dark:text-slate-800 focus:ring-purple-600"
          >
            <option value="deadline">Sort by Deadline</option>
            <option value="matrix">Sort by Eisenhower Martix</option>
          </select>
        </div>
        <div class="card-body overflow-y-auto my-3 flex flex-col gap-2 w-full p-3 max-h-[45vh] scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"></div>
      </div>
    </div>
    <div class="all-task grid gap-3 max-w-[90%] w-[90%] m-auto">
      <h2 class="text-2xl text-slate-900 dark:text-white flex justify-center">Histories</h2>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[400px] scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-500">
        <table class="table-auto w-full overflow-scroll text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-slate-200">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Task name</th>
              <th scope="col" class="px-6 py-3">Finished in</th>
              <th scope="col" class="px-6 py-3">Completed at</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>`;
  },

  async afterRender() {
    this._renderHistories();
    const timer = JSON.parse(localStorage.getItem('pomodoro'));

    let interval;
    switchMode('pomodoro');
    showSession();

    document.querySelector('#reset-session').addEventListener('click', () => {
      if (timer.status) {
        stopTimer();
      }
      localStorage.setItem('pomodoro', JSON.stringify({
        ...timer,
        sessions: 0,
      }));
      window.location.reload();
    });

    const tasksContainer = document.querySelector('.card-body');
    this._renderItemTask(tasksContainer);

    filter.addEventListener('change', async (e) => {
      this._renderItemTask(tasksContainer, e.target.value);
    });

    tasksContainer.addEventListener('click', async (e) => {
      const { checked } = e.target;
      if (timer.startDate === null || !timer.status) {
        if (checked) {
          e.target.checked = false;
        } else {
          e.target.checked = true;
        }
        Swal.fire({
          title: 'Warning!',
          text: `Please start the timer before ${checked ? 'complete' : 'uncomplete'} the task`,
          icon: 'warning',
        });
      } else if (e.target.classList.contains('checkbox') && timer.mode !== 'pomodoro') {
        if (checked) {
          e.target.checked = false;
        } else {
          e.target.checked = true;
        }
        Swal.fire({
          title: 'Warning!',
          text: `You can only ${checked ? 'complete' : 'uncomplete'} the task when you are in Pomodoro mode`,
          icon: 'warning',
        });
      } else if (e.target.classList.contains('checkbox')) {
        await ApptivityApi.updateTask(e.target.dataset.id, { completed: e.target.checked }).finally(async () => {
          if (e.target.checked) {
            console.log('ini ada');
            await ApptivityApi.createHistory({
              task: e.target.dataset.id,
              start_date: timer.startDate,
            });
          }
        });
      }
    });

    window.addEventListener('hashchange', () => {
      if (window.location.hash !== '#/pomodoro' && timer.status) {
        stopTimer();
      }
    });

    const modeButtons = document.querySelector('#js-mode-buttons');
    modeButtons.addEventListener('click', handleMode);

    const startSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3');
    const stopSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-click-error-1110.mp3');
    const endTimer = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-racing-countdown-timer-1051.mp3');
    const mainButton = document.getElementById('start-btn');
    mainButton.addEventListener('click', () => {
      const { action } = mainButton.dataset;
      if (action === 'start') {
        startTimer();
      } else {
        stopTimer();
      }
    });

    function handleMode(event) {
      const { mode } = event.target.dataset;

      if (!mode) return;

      clearInterval(interval);
      switchMode(mode);
    }

    function getRemainingTime(endTime) {
      const currentTime = Date.parse(new Date());
      const difference = endTime - currentTime;

      const total = Number.parseInt(difference / 1000, 10);
      const minutes = Number.parseInt((total / 60) % 60, 10);
      const seconds = Number.parseInt(total % 60, 10);

      return {
        total,
        minutes,
        seconds,
      };
    }

    function showSession() {
      document.querySelector('.session').innerHTML = `Session : ${timer.sessions}/${timer.longBreakInterval}`;
    }

    function startTimer() {
      const { total } = timer.remainingTime;
      const endTime = Date.parse(new Date()) + total * 1000;

      if (timer.mode === 'pomodoro') {
        if (timer.sessions === timer.longBreakInterval) timer.sessions = 0;
        if (timer.sessions === 0) timer.startDate = Date.now();
        if (timer.remainingTime.minutes === timer.pomodoro) timer.sessions += 1;
        showSession();
      }
      timer.status = true;
      changeStatusButton(true);

      interval = setInterval(() => {
        timer.remainingTime = getRemainingTime(endTime);
        updateClock();
        _utils();
      }, 1000);

      startSound.play();
    }

    function _utils() {
      const { total } = timer.remainingTime;
      if (total <= 0) {
        stopTimer();

        switch (timer.mode) {
          case 'pomodoro':
            if (timer.sessions % timer.longBreakInterval === 0) {
              switchMode('longBreak');
              endTimer.play();
              NotificationHelper.sendNotification({
                title: 'Pomodoro last session ended!',
                options: {
                  body: `Let's take a break for ${timer.longBreak} minutes`,
                  icon: './favicon.png',
                  actions: [
                    {
                      action: 'pomodoro',
                      title: 'Open pomodoro',
                    },
                  ],
                },
              });
            } else {
              switchMode('shortBreak');
              endTimer.play();
              NotificationHelper.sendNotification({
                title: `Pomodoro session ${timer.sessions} ended!`,
                options: {
                  body: `Let's take a break for ${timer.shortBreak} minutes`,
                  icon: './favicon.png',
                  actions: [
                    {
                      action: 'pomodoro',
                      title: 'Open pomodoro',
                    },
                  ],
                },
              });
            }
            break;
          default:
            switchMode('pomodoro');
            endTimer.play();
            NotificationHelper.sendNotification({
              title: 'Break is over!',
              options: {
                body: 'Let\'s come back to work',
                icon: './favicon.png',
                actions: [
                  {
                    action: 'pomodoro',
                    title: 'Open pomodoro',
                  },
                ],
              },
            });
        }
      }
    }

    function stopTimer() {
      clearInterval(interval);

      stopSound.play();
      timer.status = false;
      changeStatusButton();
      changeState();
    }

    function changeState() {
      const currentStatus = { ...timer };
      localStorage.setItem('pomodoro', JSON.stringify(currentStatus));
    }

    function changeStatusButton(start = false) {
      if (start) {
        mainButton.dataset.action = 'stop';
        mainButton.textContent = 'STOP';
      } else {
        mainButton.dataset.action = 'start';
        mainButton.textContent = 'START';
      }
    }

    function updateClock() {
      const { remainingTime } = timer;

      const minutes = `${remainingTime.minutes}`.padStart(2, '0');
      const seconds = `${remainingTime.seconds}`.padStart(2, '0');

      const min = document.getElementById('js-minutes');
      const sec = document.getElementById('js-seconds');
      min.textContent = minutes;
      sec.textContent = seconds;
    }

    function switchMode(mode) {
      timer.mode = mode;
      timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
      };

      if (timer.status) {
        changeStatusButton();
      }

      document.querySelectorAll('button[data-mode]').forEach((e) => e.classList.remove('bg-purple-600', 'border-b-4', 'border-purple-800'));
      document.querySelector(`[data-mode="${mode}"]`).classList.add('bg-purple-600', 'border-b-4', 'border-purple-800');

      const boxTimer = document.getElementById('box-time');
      const boxTask = document.getElementById('box-task');
      if (mode === 'pomodoro') {
        boxTimer.style.backgroundColor = boxTask.style.backgroundColor = '#fb7185';
      } else if (mode === 'shortBreak') {
        boxTimer.style.backgroundColor = boxTask.style.backgroundColor = '#2dd4bf';
      } else {
        boxTimer.style.backgroundColor = boxTask.style.backgroundColor = ' #0284c7';
      }

      updateClock();
      changeState();
    }
  },

  _renderItemTask(selector, sort = null) {
    let tasks = this.allTask;
    const tasksContainer = selector;
    tasksContainer.innerHTML = '';
    tasks = tasks.sort((a, b) => compareAsc(a.deadline, b.deadline));

    if (sort === 'matrix') {
      tasks = tasks.sort((a, b) => b.urgency - a.urgency).sort((a, b) => b.important - a.important);
    }

    if (tasks.length === 0) tasksContainer.innerHTML = taskNotFound('All tasks are completed');
    tasks.forEach((task) => {
      tasksContainer.innerHTML += pomodorItemTask(task);
    });
  },

  async _renderHistories() {
    const content = document.querySelector('tbody');
    content.innerHTML = '';
    const histories = await ApptivityApi.getHistory();
    if (histories.length === 0) {
      content.innerHTML = '<tr><td colspan="4" class="text-center">No history found</td></tr>';
      return;
    }

    histories.forEach((history, index) => {
      content.innerHTML += historyItemTable(history, index + 1);
    });
  },
};

export default Pomodoro;
