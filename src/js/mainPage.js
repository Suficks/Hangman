import questionGeneration from './questionGeneration';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const createVirtualKeyboard = () => {
  const virtualKeyboard = document.querySelector('.virtual_keyboard');

  letters.forEach((letter) => {
    const keyElement = document.createElement('div');
    keyElement.className = 'key';
    keyElement.textContent = letter;
    keyElement.setAttribute('data-key', letter);
    virtualKeyboard.appendChild(keyElement);
  });
};

const setStartingPage = () => {
  const template = `
    <main class="main">
      <h1 class="title">HANGMAN GAME</h1>
      <div class="game">
        <div class="gallows">
          <div class="hangman_container"></div>
          <img class="gallows_pic" src="assets/gallows.svg" alt="gallows">
        </div>
        <div class="question">
          <div class="question_container"></div>
          <div class="virtual_keyboard"></div>
        </div>
      </div>
    </main>
  `;

  document.body.insertAdjacentHTML('afterbegin', template);
  createVirtualKeyboard();
  questionGeneration();
};

setStartingPage();
