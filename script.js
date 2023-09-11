'use strict';

// console.log(document.querySelector('.message').textContent); // Selecting the element and display the content to the console
// document.querySelector('.message').textContent = 'Correct Number! 🎉'; // Change the content to something else - DOM manipulation

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); // '.value' property is used to check the value on input element

let highscore = 0;
const maxScore = 20;
let score = maxScore; // State variable - part of application state > all data relevant to the application
let secretNumber = Math.trunc(Math.random() * maxScore) + 1; // +1 is added because the random number created will never reach 20 (due to the decimal format)
// document.querySelector('.number').textContent = secretNumber; // Also state variable
console.log(secretNumber);
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// const displayScore = function (score) {
//   document.querySelector('.score').textContent = score;
// };
const elementNumber = document.querySelector('.number');
const elementGuess = document.querySelector('.guess');
const elementBody = document.querySelector('body');
const elementMessage = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', checkAnswer);
document.querySelector('.again').addEventListener('click', againButton);

const displayElementContent = function (elementSelector, text) {
  document.querySelector(elementSelector).textContent = text;
};

function checkAnswer() {
  const guess = Number(elementGuess.value);
  // When there's no input
  if (!guess) {
    displayElementContent('.guess', '⛔️ No number entered!');

    // When player wins
  } else if (guess === secretNumber) {
    displayElementContent('.message', 'Correct number! 🎉');
    displayElementContent('.number', secretNumber);
    elementBody.style.backgroundColor = '#648eb2';
    elementNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayElementContent('.highscore', highscore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayElementContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayElementContent('.score', score);
    } else {
      displayElementContent('.message', '😩 You lost the game!');
      displayElementContent('.score', 0);
    }
  }
}

function againButton() {
  score = maxScore;
  secretNumber = Math.trunc(Math.random() * maxScore) + 1;
  displayElementContent('.number', '?');
  elementNumber.style.width = '15rem';
  displayElementContent('Start guessing...');
  elementMessage.style.color = '#eee';
  elementGuess.value = '';
  elementBody.style.backgroundColor = '#222';
  displayScore(score);
}
