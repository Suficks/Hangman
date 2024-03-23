/* eslint-disable import/prefer-default-export */
import hangmanDraw from './hangmanDraw';
import { gameEndModal, playAgain } from './gameEndModal';
import { currentWord } from './questionGeneration';

const isLetterCorrect = (item) => {
  const incorrectCount = document.querySelector('.incorrect_current');
  const letters = [...document.querySelectorAll('.letter')];
  const incorrectCountNumber = +incorrectCount.textContent;
  const wordUpperCase = currentWord.toUpperCase();
  const indices = [];

  let index = wordUpperCase.indexOf(item);

  while (index !== -1) {
    indices.push(index);
    index = wordUpperCase.indexOf(item, index + 1);
  }

  if (indices.length !== 0) {
    indices.forEach((elem) => {
      const currentLetter = document.querySelector(`.letter[data-count="${elem}"]`);
      currentLetter.innerHTML = item;
      currentLetter.classList.add('correct_letter');
    });
  } else {
    incorrectCount.innerHTML = incorrectCountNumber + 1;
    hangmanDraw(incorrectCountNumber);

    if (incorrectCountNumber + 1 === 6) {
      gameEndModal(currentWord, 'You lose!');
    }
  }

  if (letters.every((letter) => letter.classList.contains('correct_letter'))) {
    gameEndModal(currentWord, 'You win!');
  }
};

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.classList.remove('pressed');

  key.addEventListener('click', () => {
    const itemText = key.textContent;
    isLetterCorrect(itemText);
    key.classList.add('pressed');
  });
});

export const pressedKeys = [];

document.addEventListener('keydown', (e) => {
  if (!document.querySelector('.modal') && /^[a-zA-Z]$/.test(e.key)) {
    const key = e.key.toUpperCase();

    if (!pressedKeys.includes(key)) {
      pressedKeys.push(key);
      isLetterCorrect(key);
    }
    const virtualKey = document.querySelector(`.key[data-key="${key}"]`);

    if (virtualKey) {
      virtualKey.classList.add('pressed');
    }
  } else if (e.key === 'Enter') {
    playAgain();
  }
});
