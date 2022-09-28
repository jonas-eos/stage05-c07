export default function Controls({
  buttonPlay,
  buttonStop
}) {
  function play() {
    buttonPlay.setAttribute('disabled', 'true');
    buttonStop.removeAttribute('disabled');
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

  return {
    play,
    pause,
    music
  }
}
