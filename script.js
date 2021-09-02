// This challenge by javascript30.com (Wes Bos)

const field = document.querySelectorAll('.field');
const figure = document.querySelectorAll('.field .figure');
const startBtn = document.querySelector('.btn-start');
const scoreBox = document.getElementById('counter');
const popSound = document.getElementById('popSound');

let fieldBefore;
let score;
let done;

function randomField(field) {
  const r = Math.floor(Math.random() * field.length);
  const fRandom = field[r];

    if (fRandom === fieldBefore) {
      randomField(field);
    }
    fieldBefore = fRandom;

  return fRandom;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function showFigure() {
  const fRandom = randomField(field);
  const tRandom = randomTime(300, 1000);
  fRandom.classList.add('show');

  setTimeout(function() {
    fRandom.classList.remove('show');
      if (done !== true) {
        showFigure(field);
      }
  }, tRandom);
}

function countScore() {
  score++;
  this.parentElement.classList.remove('show');
  scoreBox.textContent = score;
  popSound.play();
}

function play() {
  done = false;
  score = 0;
  scoreBox.textContent = 0;
  startBtn.style.display = 'none';
  showFigure();

  Array.from(figure).forEach(e => {
    e.addEventListener('click', countScore);
  });

  setTimeout(function() {
    done = true;
    startBtn.style.display = 'inline-block';
  }, 10000);
}


// startBtn.addEventListener('click', function() {
//   play(field);
// });

// Array.from(figure).forEach(e => {
//   e.addEventListener('click', countScore)
// });
