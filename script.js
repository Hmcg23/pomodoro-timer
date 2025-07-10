const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
const resetBtn = document.getElementById('reset-button');


let timer = null;
let time = 25 * 60; // 25 minutes

const updateTimerDisplay = () => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    display.textContent = `${minutes.toString().padStart('2', '0')}:${seconds.toString().padStart('2', '0')}`;
}

const startTimer = () => {
    if (!timer) {
        timer = setInterval(() => {
            time--;
            updateTimerDisplay();
            if (time === 0) {
                timer = null;
                alert("Your time is up!");
            } 
        }, 1000)
    }
}

const stopTimer = () => {
    clearInterval(timer);
    timer = null;
}

const resetTimer = () => {
    stopTimer();
    time = 25 * 60;
    updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

window.onload = updateTimeDisplay;