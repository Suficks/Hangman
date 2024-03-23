/* eslint-disable import/no-mutable-exports */
import questionsData from './questionsData';

export let currentWord = '';

const usedNumbers = [];

const wordGeneration = (length) => {
  const word = document.querySelector('.word');
  let i = 0;

  while (i < length) {
    word.insertAdjacentHTML('beforeend', `<div class="letter" data-count="${i}"></div>`);
    i += 1;
  }
};

const questionGeneration = () => {
  const questionContainer = document.querySelector('.question_container');

  let randomNumber;

  if (usedNumbers.length === 10) {
    usedNumbers.length = 0;
  }

  do {
    randomNumber = Math.floor(Math.random() * 10);
  } while (usedNumbers.includes(randomNumber));

  usedNumbers.push(randomNumber);

  const { question, word } = questionsData[randomNumber];

  const questionTemplate = `
    <div class="word"></div>
    <div class="hint">
      <span class="hint_title">Hint:</span>
      <span class="hint_text">${question}</span>
    </div>
    <div class="incorrect">
      <span class="incorrect_title">Incorrect guesses:</span>
      <div class="incorrect_counter">
        <span class="incorrect_current">0</span>
        <span class="incorrect_all">/ 6</span>
      </div>
    </div>
  `;
  questionContainer.innerHTML = '';
  questionContainer.insertAdjacentHTML('afterbegin', questionTemplate);
  wordGeneration(word.length);
  currentWord = word;
};

export default questionGeneration;
