export default function Controls({
  buttonPlay,
  buttonStop
}) {
  const buttonVolume = document.querySelector('input[name="forest-volume"]');
  function play() {
    buttonPlay.setAttribute('disabled', 'true');
    buttonStop.removeAttribute('disabled');
    console.log(buttonVolume.value)
  }

  function pause() {
    buttonPlay.removeAttribute('disabled');
    buttonStop.setAttribute('disabled', 'true');
  }

  function music(button, sound) {
    const isPlaying = button.classList.contains('playing');

  if (isPlaying) {
    button.classList.remove('playing');
    sound.pause();
    return
  }


  button.classList.add('playing');
  sound.play();
}
  function changeVolume(button, sound) {
    sound.volume = Number(button.value) / 100;
  }

  function switchMode(elements, switchButtons) {
    elements.forEach(element => {
      element.classList.toggle('dark-mode');
    });

    switchButtons.forEach(button => {
      button.classList.toggle('hide');
    });
  }

  return {
    play,
    pause,
    music,
    changeVolume,
    switchMode
  }
}
