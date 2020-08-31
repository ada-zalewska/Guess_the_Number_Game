let randomNumber = Math.floor(Math.random() * 100) + 1;

let output = document.getElementById('output');
let btn = document.getElementById('guessSubmit');
let hits = document.getElementById('hits');
let guessField = document.getElementById('guessField');

let guessCount = 1;

function check() {
  let userGuess = document.getElementById('guessField').value;
  if (userGuess == randomNumber) {
    output.innerHTML = `Congratulations! You got it! It was ${randomNumber}`;
  } else if (userGuess < randomNumber) {
    output.innerHTML = `Your guess is too low. It is not ${userGuess}`;
  }
  if (userGuess > randomNumber) {
    output.innerHTML = `Your guess is too high. It is not ${userGuess}`;
  }
  guessCount++;
  hits.textContent += ' ' + userGuess + ' ';
}

function setGameOver() {
  if (guessCount == 10) {
    guessField.disabled = true;
    btn.innerHTML = `Restart game`;
  }
}

btn.addEventListener('click', check);
btn.addEventListener('click', setGameOver);

/*
let guesses = document.getElementById('guesses');
let lastResult = document.getElementById('lastResult');
let lowOrHi = document.getElementById('lowOrHi');

let guessSubmit = document.getElementById('guessSubmit');//
let guessField = document.getElementById('guessField');

let guessCount = 1;
let resetButton;

function setGameOver() {
  guessField.disabled = true;
  
}

function checkGuess() {
  let userGuess = Number(guessField);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if(userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it!';
    lowOrHi.textContent = '';
    setGameOver();
  } else if(userGuess === 10) {
    lastResult.textContent = 'Game Over !'
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber){
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  guessCount++;
  guessField = '';
  //guessField.focus();
}

if(guessSubmit){
  guessSubmit.addEventListener('click', checkGuess);
}

function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField = '';
  guessField.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
*/