'use strict';
// debugger;

// Selecting elements
let scoreEl = document.querySelector('.score');
const btnNextQuestion = document.querySelector('.btn--nextquestion');
const btnStartQuiz = document.querySelector('.btn--startquiz');
const nameAndQuestion = document.querySelector('.name');
const answer0 = document.querySelector('#answer--0');
const answer1 = document.querySelector('#answer--1');
const answer2 = document.querySelector('#answer--2');
//const imgQuizTime = document.querySelector('#quiztime--image');

// 'working' variables:
let currentQuestion, currentScore;

const questions = [
  'Hoe oud is Stefanie?',
  'Wat zijn haar hobbies?',
  'Wat is haar favoriete serie?',
];

const answers0 = ['29', 'Programmeren, schilderen, voetbal', 'Dexter'];

const answers1 = [
  '31',
  'Programmeren, houtbewerking, zwemmen',
  'La Casa de Papel',
];

const answers2 = [
  '33',
  'Programmeren, saxofoon spelen, tennis',
  'The Sopranos',
];

const correctAnswers = [1, 1, 2];

//Function to Remove Questions and Answers
const notPlaying = function () {
  btnNextQuestion.classList.add('hidden');
  btnStartQuiz.classList.remove('hidden');

  for (let i = 0; i < questions.length; i++) {
    document.querySelector(`#radio--${i}`).classList.add('hidden');
    document.querySelector(`#answer--${i}`).classList.add('hidden');
  }
};

const uncheckRadioButtons = function () {
  let radiobuttons = document.getElementsByName('radio--answer');
  for (let i = 0; i < radiobuttons.length; i++) {
    radiobuttons[i].checked = false;
  }
};

// Landing conditions:
scoreEl.classList.add('hidden');
notPlaying();
document.getElementById('congratulations').style.display = 'none';
document.getElementById('too--bad').style.display = 'none';

// Start Quiz conditions
btnStartQuiz.addEventListener('click', function () {
  // (Re)Set working variables
  currentQuestion = 0;
  currentScore = 0;

  // display and hide imageS, buttons and text element Score
  //imgQuizTime.classList.add('hidden');
  document.getElementById('quiztime--image').style.display = 'none';
  document.getElementById('congratulations').style.display = 'none';
  document.getElementById('too--bad').style.display = 'none';
  btnStartQuiz.classList.add('hidden');
  btnNextQuestion.classList.remove('hidden');
  scoreEl.classList.add('hidden');
  document.querySelector('.playfield').classList.remove('quiz--finished');
  // Display question and (unchecked) radio buttons + answers
  uncheckRadioButtons();
  nameAndQuestion.textContent = questions[currentQuestion];
  for (let i = 0; i < questions.length; i++) {
    document.querySelector(`#radio--${i}`).classList.remove('hidden');
    document.querySelector(`#answer--${i}`).classList.remove('hidden');
    // document.getElementById(`answer--${i}`).innerHTML = `answers${i}`[
    //   currentQuestion
    // ];
  }
  document.getElementById('answer--0').innerHTML = answers0[currentQuestion];
  document.getElementById(`answer--1`).innerHTML = answers1[currentQuestion];
  document.getElementById(`answer--2`).innerHTML = answers2[currentQuestion];
});

btnNextQuestion.addEventListener('click', function () {
  if (
    document.getElementById(`toggle--${[correctAnswers[currentQuestion]]}`)
      .checked
  ) {
    currentScore++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    // Volgende vraag
    nameAndQuestion.textContent = questions[currentQuestion];
    document.querySelector('#answer--0').textContent =
      answers0[currentQuestion];
    document.querySelector('#answer--1').textContent =
      answers1[currentQuestion];
    document.querySelector('#answer--2').textContent =
      answers2[currentQuestion];
    uncheckRadioButtons();
  } else {
    // Einde quiz
    nameAndQuestion.textContent = 'Jouw Score:';
    notPlaying();
    document.querySelector('.playfield').classList.add('quiz--finished');
    btnStartQuiz.textContent = '▶ Speel Opnieuw';
    scoreEl.classList.remove('hidden');
    scoreEl.textContent = currentScore + '/3';
    if (currentScore >= 2) {
      document.getElementById('congratulations').style.display = 'inline';
    } else {
      document.getElementById('too--bad').style.display = 'inline';
    }
  }
});
