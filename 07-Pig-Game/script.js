'use strict';

// Selecting elements:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// state variables:
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generation a random dice roll
    const dice = Number(Math.trunc(Math.random() * 6 + 1));
    console.log(dice);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // CHANGE LATER
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to other player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  // Restore current and final scores to 0
  score0El = 0;
  score1El = 0;
  current0El = 0;
  current1El = 0;

  for (let i = 0; i < scores.length; i++) {
    scores[i] = 0;
    document.getElementById(`score--${i}`).textContent = scores[i];
    document.getElementById(`current--${i}`).textContent = 0;
    currentScore = 0;
  }
  // go to original layout
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  // Player 1 is active player:
  activePlayer = 0;
  // Reactivate buttons
  playing = true;
  // Remove dice
  diceEl.classList.add('hidden');
});
