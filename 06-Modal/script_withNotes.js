'use strict';
// filmke 79: PROJECT #2: Modal Window
// Good practice: start by selecting everything / all elements that we  need, and store them in variables. And them we can use them over and over again.
// & filmke 80: Working with Classes
// Classes adden en removen is common practice, meer hierover hieronder
// & filmke 81: Handling an "Esc" Keypress Event
// keyboard events zijn global events, ze gebeuren niet op één specifiek element, ze kunnen op het hele document gebeuren

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

// querySelector kan niet gebruikt worden als onze class meerdere elements bevat - want dan wordt enkel het eerste element geselecteerd
// Oplossing: querySelectorAll
//const btnsOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// btnsOpenModal --> verschijnt in console als NodeList, wat een beetje lijkt op een array
// Als we nu iets willen wijzigen aan alle buttons, dan kunnen we loopen door de nodelist (zoals we zouden loopen door een array)
// for (let i = 0; i < btnsOpenModal.length; i++)   console.log(btnsOpenModal[i].textContent);
// Lijn hierboven: curly braces {} van for loop niet nodig als we maar één lijn code in de loop hebben

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Volgende stuk in copy, omdat we er een functie van hebben gemaakt (openModal)
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     // van de modal elements moeten we de class 'hidden' verwijderen om de modal zichtbaar te maken. Dat doen we als volgt:
//     modal.classList.remove('hidden'); // geen dot voor class hier! de dot is only for the (query)Selector
//     overlay.classList.remove('hidden');
//     // Adding and removing class zoals we hierboven hebben gedaan, is de main way we use for changing styles on websites. A class aggregates many styles (many CSS properties) in just 1 class. Dus dan moeten we niet telkens alle properties individueel uit- en aanzetten, maar kunnen we dat in één keer doen voor alle style properties die in die class zitten.
//     // in CSS ziet dat eruit als property 'display: none;'
//   });

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); // we are not calling the function, calling function would look lik 'closeModal()'
overlay.addEventListener('click', closeModal);

// keyboard press listener toevoegen --> Clicking Escape moet venster ook sluiten
// 3 soorten listeners:
//  1) keyup = when we lift our finger OFF the keyboard
//  2) keypress = is fired continuously as we keep our finger on a certain key
//  3) keydown = fired as soon as we pres down on a key --> Meest gebruikte
// Deze 2 worden standaard getriggerd door any key, zijn niet key-specifiek
document.addEventListener('keydown', function (e) {
  // bij iedere key die we indrukken, JS creëer daarvoor een object e. Dat object kunnen we als argument aan de functie toevoegn (e hierboven) en oproepen zoals hieronder:
  console.log(e);
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');
    closeModal();
  }
});
