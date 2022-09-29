export default function Timer({
  play,
  pause,
  minutesDisplay,
  secondsDisplay
}) {
  let timerTimeOut;
  let minutes;
  let seconds = Number(secondsDisplay.textContent);

  function countDown() {
    play();
    updateMinutes(Number(minutesDisplay.textContent));
    timerTimeOut = setTimeout(function () {
      const isFinished = minutes === 0 && seconds === 0;
      seconds--;

      if (isFinished) {
        stopCountDown();

        return;
      };

      if (seconds < 0) {
        seconds = 59;
        minutes--;
      };

      updateDisplay(minutes, seconds);

      countDown();

    }, 1000);
  };

  function updateMinutes(pMinutes) {
    minutes = pMinutes;
  }

  function stopCountDown() {
    pause();
    updateDisplay();
    clearTimeout(timerTimeOut);
  };

  function updateDisplay(pMinutes, pSeconds) {
    const newMinutes = pMinutes === undefined ? 25 : pMinutes;
    const newSeconds = pSeconds === undefined ? 0 : pSeconds;

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
    secondsDisplay.textContent = String(newSeconds).padStart(2, '0');
  };

  function add() {
    minutes += 5;
    updateDisplay(minutes, seconds);
  };

  function reduce() {
    if (minutes < 5) {
      return;
    }

    minutes -= 5;

    updateDisplay(minutes, seconds);
  };

  return {
    countDown,
    stopCountDown,
    add,
    reduce
  };
};
