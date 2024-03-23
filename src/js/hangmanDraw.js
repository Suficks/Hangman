const hangmanBody = [
  '<img class="head" src="assets/head.png" alt="head">',
  '<img class="body" src="assets/body.png" alt="body">',
  '<img class="arm" src="assets/body-part.png" alt="arm">',
  '<img class="arm arm-right" src="assets/body-part.png" alt="arm">',
  '<img class="leg" src="assets/body-part.png" alt="leg">',
  '<img class="leg leg-right" src="assets/body-part.png" alt="leg">',
];

const hangmanDraw = (index) => {
  const gallows = document.querySelector('.hangman_container');
  gallows.insertAdjacentHTML('afterbegin', hangmanBody[index]);
};

export default hangmanDraw;
