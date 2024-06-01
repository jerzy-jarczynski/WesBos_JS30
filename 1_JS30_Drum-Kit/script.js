const playOnClick = () => {
  const keys = document.querySelectorAll('.key-content');
  
  keys.forEach((key) => {
    const keyCode = key.dataset.key;

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const domKey = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!audio) return;
    key.addEventListener('click', (e) => {
      e.preventDefault();
      audio.currentTime = 0;
      audio.play();
      domKey.classList.add('playing');
    });
  });
};

playOnClick();

const playOnKey = (e) => {
  const key = e.key.toLocaleLowerCase();

  let keyCode = 0;

  switch(key) {
    case 'a': keyCode = 65; break;
    case 's': keyCode = 83; break;
    case 'd': keyCode = 68; break;
    case 'f': keyCode = 70; break;
    case 'g': keyCode = 71; break;
    case 'h': keyCode = 72; break;
    case 'j': keyCode = 74; break;
    case 'k': keyCode = 75; break;
    case 'l': keyCode = 76; break;
    default: keyCode = 0; break;
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const domKey = document.querySelector(`div[data-key="${keyCode}"]`);
  
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  domKey.classList.add('playing');
};

window.addEventListener('keydown', playOnKey);

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key-content');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));