const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const ResetBtn = document.getElementById('rest-btn');


let timer = null;
let time = 25 * 60; // 25 minutes

const updateTimerDisplay = () => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    display.textContent = `${minutes.toString().padStart('2', '0')}:${seconds.toString().padStart('2', '0')}`;
}
