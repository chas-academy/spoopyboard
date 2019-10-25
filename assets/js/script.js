window.addEventListener('keydown', function(event) {
  console.log(`Key pressed: ${event.keyCode}`);
  let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  let keys = document.querySelectorAll('.key');

  keys.forEach(function(key) {
     // Lista ut hur vi tar bort transition?
     key.addEventListener('transitionend', removeTransition);
  });
});