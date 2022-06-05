import Swal from 'sweetalert2';
import ApptivityApi from '../../data/apptivity-api';
import { pomodorItemTask, taskNotFound } from '../template/template-creator';

const Pomodoro = {
  async render() {
    return `
        <div class="flex flex-col mx-4 md:flex-row gap-3">
        <div class="flex font-nunito rounded-md flex-col items-center justify-center w-full" id="box-time">
        <div class="flex justify-center text-white ">
            <div class="mb-4 pt-5 pb-7 h-350 rounded-xl ">
              <div class="flex justify-center" id="js-mode-buttons">
                <button class="text-base rounded-md py-1 px-3 bg-purple-600 border-b-4 border-purple-800" data-mode="pomodoro">Pomodoro</button>
                <button class="text-base rounded-md py-1 px-3" data-mode="shortBreak">Short Break</button>
                <button class="text-base rounded-md py-1 px-3" data-mode="longBreak">Long Break</button>
              </div>
              <div class="flex justify-center text-9xl py-6" id="time-display">
                <span id="js-minutes">25</span>
                <span class="separator">:</span>
                <span id="js-seconds">00</span> 
              </div>
              <div class="grid pt-10 gap-4 justify-center">
                <button class="
                bg-amber-400 hover:bg-amber-500 border-b-4 py-4 w-[200px] border-amber-600 text-white text-lg font-extrabold
                rounded-md text-center"
                data-action="start" id="start-btn">START</button>
                <div class="session text-slate-50 text-center text-sm"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="block rounded-md py-5 px-4 w-full min-h-[70vh] max-h-[70vh]" id="box-task">
          <div class="flex items-center text-white text-4xl my-0">
            <p class="font-nunito font-extrabold m-auto ">Tasks</p>
          </div>
          <div class="card-body overflow-y-auto my-3 flex flex-col gap-2 w-full p-3 max-h-[50vh] scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            
          </div>
        </div>
       `;
  },
  async afterRender() {
    const timer = {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
      longBreakInterval: 4,
      sessions: 0,
      status: false,
    };

    let interval;
    let startDate = null;
    switchMode('pomodoro');
    showSession();

    const tasksContainer = document.querySelector('.card-body');
    const tasks = await this._getUncompletedTasks();
    tasksContainer.innerHTML = '';
    if (tasks.length === 0) tasksContainer.innerHTML = taskNotFound('All tasks are completed');
    tasks.forEach((task) => {
      tasksContainer.innerHTML += pomodorItemTask(task);
    });

    tasksContainer.addEventListener('click', async (e) => {
      if (e.target.classList.contains('checkbox') && startDate === null) {
        Swal.fire({
          title: 'Warning!',
          text: 'Please start the timer before completing the task',
          icon: 'warning',
        });
        e.target.checked = false;
        return;
      }

      if (e.target.classList.contains('checkbox')) {
        await ApptivityApi.updateTask(e.target.dataset.id, { completed: e.target.checked });
        if (e.target.checked) {
          await ApptivityApi.createHistory({
            task: e.target.dataset.id,
            start_date: startDate,
          });
        }
      }
    });

    const modeButtons = document.querySelector('#js-mode-buttons');
    modeButtons.addEventListener('click', handleMode);

    const startSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3');
    const stopSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-click-error-1110.mp3');
    const mainButton = document.getElementById('start-btn');
    mainButton.addEventListener('click', () => {
      const {
        action,
      } = mainButton.dataset;
      if (action === 'start') {
        startTimer();
      } else {
        stopTimer();
      }
    });

    function handleMode(event) {
      const {
        mode,
      } = event.target.dataset;

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
      const {
        total,
      } = timer.remainingTime;
      const endTime = Date.parse(new Date()) + total * 1000;

      if (timer.sessions === 0) startDate = Date.now();

      if (timer.mode === 'pomodoro') {
        if (timer.sessions === timer.longBreakInterval) timer.sessions = 0;
        timer.sessions++;
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
            } else {
              switchMode('shortBreak');
            }
            break;
          default:
            switchMode('pomodoro');
        }
      }
    }

    function stopTimer() {
      clearInterval(interval);

      stopSound.play();
      timer.status = false;
      changeStatusButton();
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
      const {
        remainingTime,
      } = timer;

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

      document
        .querySelectorAll('button[data-mode]')
        .forEach((e) => e.classList.remove('bg-purple-600', 'border-b-4', 'border-purple-800'));
      document.querySelector(`[data-mode="${mode}"]`).classList.add('bg-purple-600', 'border-b-4', 'border-purple-800');

      const boxTimer = document.getElementById('box-time');
      const boxTask = document.getElementById('box-task');
      if (mode === 'pomodoro') {
        boxTimer.style.backgroundColor = boxTask.style.backgroundColor = '#fb7185';
      } else if (mode === 'shortBreak') {
        boxTimer.style.backgroundColor = boxTask.style.backgroundColor = '#0284c7';
      } else {
        boxTimer.style.backgroundColor = boxTask.style.backgroundColor = '#2dd4bf';
      }

      updateClock();
    }
  },

  async _getUncompletedTasks() {
    const tasks = await ApptivityApi.getAllTask('completed=false');
    return tasks;
  },

  // async _renderItemTask() {

  // },
};

export default Pomodoro;