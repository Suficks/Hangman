import questionGeneration from './questionGeneration';
import { pressedKeys } from './isLetterCorrect';

const removeModal = () => {
  const main = document.querySelector('.main');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  main.removeChild(modal);
  main.removeChild(overlay);
};

export const playAgain = () => {
  const hangmanPicture = document.querySelector('.hangman_container');
  const keys = document.querySelectorAll('.key');

  keys.forEach((key) => {
    key.classList.remove('pressed');
  });
  questionGeneration();
  removeModal();
  hangmanPicture.innerHTML = '';
  pressedKeys.length = 0;
};

export const gameEndModal = (word, message) => {
  const main = document.querySelector('.main');

  const modal = `
    <div class="modal">
      <h2 class="modal_title">${message}</h2>
      <div class="answer">
        <span class="answer_title">Answer is:</span>
        <span class="correct_word">${word}</span>
      </div>
      <button class="play_again">Play again</button>
      </div>
      <div class="overlay"></div>
  `;
  main.insertAdjacentHTML('beforeend', modal);

  if (document.querySelector('.modal')) {
    const playAgainBtn = document.querySelector('.play_again');
    playAgainBtn.addEventListener('click', playAgain);
  }
};
