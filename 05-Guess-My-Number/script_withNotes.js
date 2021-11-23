'use strict';

// Filmke 71: What's the DOM and DOM Manipulation
// DOM-manipulation: JS laten interacten met een webpage
// DOM = Document object model: structured representation of HTML documents allows JS to Access HTML elements and styles to manipulate them.
// For ex., we will be able to change text, HTML attributes and CSS styles
// DOM = the connection between HTML documents and JS code
// DOM = een boomstructuur waarin het HTML document volledig in gerepresenteerd wordt - ieder HTML element wordt gerepresenteerd door een DOM-node
// DOM maakt geen deel uit van JS, DOM methods and properties are part of the WEB APIs (=libraries that browsers implement, and that we can access from our JS code(libraries are also written in JS)).  API = application programming interface.
// DOM werkt hetzelfde in/voor alle browsers

// Filmke 72: Selecting and Manipulating Elements
// Text selecteren
// console.log(document.querySelector('.message').textContent);

// // Text veranderen:
// document.querySelector('.message').textContent = 'Correct Number!🎉';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // de value uit een inputveld (dat input van user vraagt) selecteren:
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Filmke 73: Handling Click Events
// Event listener voor nodig
// Event = mouse click, mouse moving, key press, ...
// Event listener = waiting for a certain action to happen, and then react to it
// EventListener heeft 2 parameters: een event, en een functie --> parameters zijn optioneel
// die functie is een Function Expression = de event handler
// wij moeten zelf de functie nergens callen. Het is de JS engine who will call the function as soon as the event happens (vb. a button is clicked). Daarom ook de functie parameter zonder haakjes.

let secretNumber = Math.trunc(Math.random() * 20) + 1; // random nummer van 1 tem 20
let score = 20; // het is beter om de data ook in onze code te hebben, en niet enkel in de DOM. Vandaar deze variabele
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // type van een input veld in HTML is standaard een string --> type conversion naar Number
  //document.querySelector('.message').textContent = 'Correct Number! 🎉';

  // Eerste stap: checken of er wel een value is (no input)
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    // When guess = secretnumber --> player wins:
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber; // toont gegenereert random number
    // CSS properties veranderen met 'style'- property, gevolgd door de CSS property in camelCase (andere notatie dan in CSS zelf!)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; // als we een style willen veranderen moeten we ALTIJD een string noteren, ook voor nummers zoals width

    // keeping high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is too high or too low:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Clicking on 'again' button --> resetting the game:
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
