/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
const Pomodoro = {
  async render() {
    return `<div class="flex justify-center mt-8 mb-8">
        <h1 class="font-concert text-7xl text-white animate-bounce text-center">Pomodoro</h1>
        </div>
        <div class="flex flex-col px-8 mx-auto my-8 xl:px-5 lg:flex-row max-w-7xl">
        <div class="flex  font-nunito rounded-md flex-col items-center justify-center w-full px-10 py-1 mb-8 mr-6 lg:mb-0 lg:flex-1 lg:w-1/3" id="box-time">
        <div class="flex justify-center text-white ">
            <div class="my-4 pt-5 pb-7 h-350 rounded-xl ">
              <div class="flex justify-center" id="js-mode-buttons">
                <button class="text-base rounded-xl py-1 px-3 active" data-mode="pomodoro">Pomodoro</button>
                <button class="text-base rounded-xl py-1 px-3" data-mode="shortBreak">Short Break</button>
                <button class="text-base rounded-xl py-1 px-3" data-mode="longBreak">Long Break</button>
              </div>
              <div class="flex justify-center text-9xl py-6" id="time-display">
                <span id="js-minutes">25</span>
                <span class="separator">:</span>
                <span id="js-seconds">00</span> 
              </div>
              <div class="flex pt-10 justify-center">
                <button class="
                bg-amber-400 text-white
                py-3 px-16  text-lg font-extrabold
                rounded-md shadow-start_inset"
                data-action="start" id="start-btn">START</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex overflow-x-hidden lg:overflow-y-auto scrollbar-hide rounded-md flex-row items-center justify-center w-full px-10 py-1 mb-8 mr-6 lg:mb-0 lg:flex-1 lg:w-1/3" id="box-task">
            <div class="flex justify-center text-white font-nunito w-full">
                <div class=" p-0 px-2 pb-7 h-350 rounded-xl  ">
                    <div class="flex items-center text-white text-4xl lg:text-4xl my-0 py-4">
                        <p class="font-nunito font-extrabold m-auto ">Tasks</p>
                      </div>

                      <div class="flex
                    bg-white w-80
                    rounded-md border-white
                    py-3 my-2 mx-auto px-2 lg:px-4 lg:w-96">
                      <label class="flex items-start">
                        <input type="checkbox" class="form-checkbox border-0 rounded-md h-8 w-8" checked><span class="ml-4  text-sm text-gray-900">
                          Contoh TASK 1 mandi di sungai muara yang luas
                        </span> 
                      </label>
                    </div>
                    <div class="flex
                    bg-white w-80
                    rounded-md border-white
                    py-3 my-2 mx-auto px-2 lg:px-4 lg:w-96">
                      <label class="flex items-start">
                        <input type="checkbox" class="form-checkbox border-0 rounded-md h-8 w-8" checked><span class="ml-4  text-sm text-gray-900">
                          Contoh TASK 1 mandi di sungai muara yang luas
                        </span> 
                      </label>
                    </div>
                    <div class="flex
                    bg-white w-80
                    rounded-md border-white
                    py-3 my-2 mx-auto px-2 lg:px-4 lg:w-96">
                      <label class="flex items-start">
                        <input type="checkbox" class="form-checkbox border-0 rounded-md h-8 w-8" checked><span class="ml-4  text-sm text-gray-900">
                          Contoh TASK 1 mandi di sungai muara yang luas
                        </span> 
                      </label>
                    </div>
                    <div class="flex
                    bg-white w-80
                    rounded-md border-white
                    py-3 my-2 mx-auto px-2 lg:px-4 lg:w-96">
                      <label class="flex items-start">
                        <input type="checkbox" class="form-checkbox border-0 rounded-md h-8 w-8" checked><span class="ml-4  text-sm text-gray-900">
                          Contoh TASK 1 mandi di sungai muara yang luas
                        </span> 
                      </label>
                    </div>
                    <div class="flex
                    bg-white w-80
                    rounded-md border-white
                    py-3 my-2 mx-auto px-2 lg:px-4 lg:w-96">
                      <label class="flex items-start">
                        <input type="checkbox" class="form-checkbox border-0 rounded-md h-8 w-8" checked><span class="ml-4  text-sm text-gray-900">
                          Contoh TASK 1 mandi di sungai muara yang luas
                        </span> 
                      </label>
                    </div>
                    <div class="flex
                    bg-white w-80
                    rounded-md border-white
                    py-3 my-2 mx-auto px-2 lg:px-4 lg:w-96">
                      <label class="flex items-start">
                        <input type="checkbox" class="form-checkbox border-0 rounded-md h-8 w-8" checked><span class="ml-4  text-sm text-gray-900">
                          Contoh TASK 1 mandi di sungai muara yang luas
                        </span> 
                      </label>
                    </div>
              </div>
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
    };

    let interval;
    switchMode('pomodoro');

    const modeButtons = document.querySelector('#js-mode-buttons');
    modeButtons.addEventListener('click', handleMode);

    const buttonSound = new Audio('../button-sound.mp3');
    const mainButton = document.getElementById('start-btn');
    mainButton.addEventListener('click', () => {
      buttonSound.play();
      const {
        action,
      } = mainButton.dataset;
      if (action === 'start') {
        startTimer();
      } else {
        stopTimer();
      }
    });
    console.log(buttonSound);

    function handleMode(event) {
      const {
        mode,
      } = event.target.dataset;

      if (!mode) return;

      switchMode(mode);
      stopTimer();
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

    function startTimer() {
      let {
        total,
      } = timer.remainingTime;
      const endTime = Date.parse(new Date()) + total * 1000;

      if (timer.mode === 'pomodoro') timer.sessions++;

      mainButton.dataset.action = 'stop';
      mainButton.textContent = 'STOP';
      mainButton.classList.add('active');

      interval = setInterval(() => {
        timer.remainingTime = getRemainingTime(endTime);
        updateClock();
        total = timer.remainingTime.total;
        if (total <= 0) {
          clearInterval(interval);

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
          document.querySelector(`[data-sound="${timer.mode}"]`).play();
          startTimer();
        }
      }, 1000);
    }

    function stopTimer() {
      clearInterval(interval);

      mainButton.dataset.action = 'start';
      mainButton.textContent = 'START';
      mainButton.classList.remove('active');
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

      document
        .querySelectorAll('button[data-mode]')
        .forEach((e) => e.classList.remove('active'));
      document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

      if (mode === 'pomodoro') {
        document.getElementById('box-time').style.backgroundColor = '#dd6662';
        document.getElementById('box-task').style.backgroundColor = '#dd6662';
        document.getElementById('box-time').style.transition = 'background-color 1s ease-in-out';
        document.getElementById('box-task').style.transition = 'background-color 1s ease-in-out';
      } else if (mode === 'shortBreak') {
        document.getElementById('box-time').style.backgroundColor = '#4385a3';
        document.getElementById('box-task').style.backgroundColor = '#4385a3';
      } else if (mode === 'longBreak') {
        document.getElementById('box-time').style.backgroundColor = '#626299';
        document.getElementById('box-task').style.backgroundColor = '#626299';
      }

      updateClock();
    }
  },
};

export default Pomodoro;
