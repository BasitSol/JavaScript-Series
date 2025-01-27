let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let PlayGame = true;

if (PlayGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //This is for to guess the valid no only integers not alphabet or other
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Valid Number Greater than 1');
  } else if (guess > 100) {
    alert('Please Enter a Valid Number Less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`GameOver, Random Number was : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // this is for the check and to show that your value is hi or low or equal
  if (guess === randomNumber) {
    displayMessage(`You Guesses it Right !`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Guessed number is Tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Guessed Number is Tooo High`);
  }
}
function displayMessage(message) {
  // This method will interect with the DOM and make user input value empty we will make the whole logic like decrement
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function displayGuess(guess) {
  lowOrHi.innerHTML = `<h2>${guess}</h2>`;
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    PlayGame = true;
  });
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start New Game</h2?`;
  startOver.appendChild(p);
  PlayGame = false;
  newGame();
}
