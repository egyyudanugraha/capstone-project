const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    sessions: 0,
};

let interval;

document.addEventListener('DOMContentLoaded', () => {
    switchMode('pomodoro');
});

const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

const buttonSound = new Audio("../src/scripts/button-sound.mp3");
const mainButton = document.getElementById('start-btn');
mainButton.addEventListener('click', () => {
    buttonSound.play();
    const {
        action
    } = mainButton.dataset;
    if (action === 'start') {
        startTimer();
    } else {
        stopTimer();
    }
});
console.log(buttonSound)

function handleMode(event) {
    const {
        mode
    } = event.target.dataset;

    if (!mode) return;

    switchMode(mode);
    stopTimer();
}

function handleMode(event) {
    const {
        mode
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
        total
    } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;

    if (timer.mode === 'pomodoro') timer.sessions++;

    mainButton.dataset.action = 'stop';
    mainButton.textContent = 'STOP';
    mainButton.classList.add('active');

    interval = setInterval(function () {
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
        remainingTime
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
        .forEach(e => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.body.style.backgroundColor = `var(--${mode})`;
    document.body.style.transition = 'background-color 1s ease-in-out';

    if (mode === 'pomodoro') {
        document.getElementById('box-time').style.backgroundColor = '#dd6662';
        document.getElementById('box-task').style.backgroundColor = '#dd6662';
        document.getElementById('box-time').style.transition = 'background-color 1s ease-in-out';
        document.getElementById('box-task').style.transition = 'background-color 1s ease-in-out';
    }else if (mode === 'shortBreak') {
        document.getElementById('box-time').style.backgroundColor = '#4385a3';
        document.getElementById('box-task').style.backgroundColor = '#4385a3';
    }else if(mode === 'longBreak'){
        document.getElementById('box-time').style.backgroundColor = '#626299';
        document.getElementById('box-task').style.backgroundColor = '#626299';
    }




    updateClock();
}