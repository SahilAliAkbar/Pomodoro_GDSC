let interval;
let totalTime = 1500; // Initial time in seconds (25 minutes)
let currentTime = totalTime;
let sessionsCompleted = 0;

const timerDisplay = document.getElementById('timer');
const progressBar = document.getElementById('progress');
const sessionCounter = document.getElementById('session-counter');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    pauseButton.disabled = false;
}

function pauseTimer() {
    clearInterval(interval);
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetTimer() {
    clearInterval(interval);
    currentTime = totalTime;
    updateDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function updateTimer() {
    currentTime--;
    updateDisplay();

    if (currentTime <= 0) {
        clearInterval(interval);
        sessionsCompleted++;
        sessionCounter.textContent = sessionsCompleted;
        resetTimer();
    }
}

function updateDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const display = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    timerDisplay.textContent = display;

    const progressPercentage = (currentTime / totalTime) * 100;
    progressBar.style.width = progressPercentage + '%';
}
