'use strict';

//Exercises Section 1&2 - JavaScript Fundamentals 

/* Coding Challenge #1
// 1. Store Mark's and John's mass and height in variables
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

// 2. Calculate both their BMIs
const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

//3. create boolean
const markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI);

// Coding Challenge #2:
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's (${bmiJohn}) BMI is higher than Mark's (${bmiMark})`);
}

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);



// Coding Challenge #3
const averageDolphins = (97 + 112 + 101) / 3;
console.log(averageDolphins);
const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageKoalas);

if ((averageKoalas || averageDolphins) < 100) {
    console.log('nobody wins, minimum score of 100 not reached');
}
else if (averageDolphins > averageKoalas) {
    console.log('The Dolphin are the winners');
} else if (averageKoalas > averageDolphins) {
    console.log('The Koalas are the winners');
} else {
    console.log("It's a draw");
}

const day = 'monday';

if (day === 'monday') {
    console.log('blabla');
} else if (day === 'tuesday') {
    console.log('bleble');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('bloblo');
} else if (day === 'friday') {
    console.log('blibli');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('blublu');
} else {
    console.log('not a valid day');
}


// Coding challenge #4

let tip;
const bill = 430;
tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
console.log(`When the bill amounts to ${bill} dollar, the tip will be ${tip} dollar. You will pay a total amount of ${bill + tip} dollar `);
*/

// 38. Coding Challenge #1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No one wins! (Average Score Dolphins: ${avgDolphins} vs. Average Score Koalas: ${avgKoalas})`)
    }
}

//TEST DATA 1:
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

checkWinner(avgDolphins1, avgKoalas1);

//TEST DATA :
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

checkWinner(avgDolphins2, avgKoalas2);
*/

// Kleine challenge in lecture 43: Dot vs. Bracket Notation
// Schrijf de volgende zin zonder hardcoded values: "Jonas has 3 friends, and his best friend is called Michael. "

// console.log(`${stefanie.firstName} has ${stefanie.friends.length} friends, and her best friend is called ${stefanie.friends[0]}.`)



/* Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
}

mark.calcBMI();
john.calcBMI();
//console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`)
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`)
}
*/

/* Filmke 50: Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
    let tip;
    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } else {
        tip = billValue * 0.20;
    }
    return tip;
}

function calcTotal(billValue) {
    let total;
    if (billValue > 50 && billValue < 300) {
        total = (billValue * 0.15) + billValue;
    } else {
        total = (billValue * 0.20) + billValue;
    }
    return total;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = calcTotal(bills[i]);
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        //console.log(sum);
    }
    let average = sum / (arr.length);

    return average;
}

console.log(calcAverage(tips));
console.log(calcAverage(totals));
*/



// Equality Operators == vs ===
/*
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/

/*
LOGICAL OPERATORS
let country = prompt("What country do you live in?");
let language = prompt("Is English one of the main languages? (Y/N)");
let population = Number(prompt("What's the population of your country? (in million)"));
let island = prompt("Is your country an island? (Y/N)");

if (language === 'Y' && population < 50 && island === 'N') {
    console.log(`Sarah should live in ${country}!`);
} else {
    console.log(`${country} does not meet Sarah's criteria`);
}
*/

/*The Switch Statement

const language = 'english';
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers");
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'english':
        console.log("3rd place");
        break;
    case 'hindi':
        console.log("Number 4");
        break;
    case 'arabic':
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}
*/

/* The Conditional (Ternary) Operator

const population = '11';
const country = 'Belgium';

console.log(`${country} 's population is ${population > 33 ? 'above' : 'below'} average.`);
*/

// JavaScript  Fundamentals - Part 2
/* Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const country1 = describeCountry('Belgium', 11, 'Brussels');
const country2 = describeCountry('Spain', 22, 'Madrid');
const country3 = describeCountry('Germany', 35, 'Berlin');

console.log(country1, country2, country3);
*/

/* Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percentageBelgium = percentageOfWorld1(11);
const percentageSpain = percentageOfWorld1(32);
const percentageGermany = percentageOfWorld1(99);
console.log(percentageBelgium, percentageSpain, percentageGermany);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const percentageRussia = percentageOfWorld2(499);
console.log(percentageRussia);

const percentageOfWorld3 = population => population / 7900 * 100;
const percentagePortugal = percentageOfWorld2(10);
console.log(percentagePortugal);
*/

/* Functions Calling Other Functions
function percentageOfWorld(population) {
    return population / 7900 * 100;
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld(population)}% of the world.`
}

const percentageBelgium = describePopulation('Belgium', 11);
const percentageSpain = describePopulation('Spain', 32);
const percentageGermany = describePopulation('Germany', 99);

console.log(percentageBelgium, percentageSpain, percentageGermany);
*/

/* Introduction to Arrays
function percentageOfWorld(population) {
    return population / 7900 * 100;
}

const population = [11, 488, 67, 33];
console.log(population.length === 4);
const percentages = [
    percentageOfWorld(population[0]),
    percentageOfWorld(population[1]),
    percentageOfWorld(population[2]),
    percentageOfWorld(population[3])
];

console.log(percentages);
*/

/* Basic Array Operations
const neighbours = ['Nederland', 'Frankrijk', 'Luxemburg', 'Duitsland'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Duitsland')) {
    console.log('Probably not a central European Country :D');
}
neighbours[neighbours.indexOf('Nederland')] = 'Zweden'
console.log(neighbours);
*/

/* Coding Challenge #2

function calcTip(billValue) {
    let tip;
    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } else {
        tip = billValue * 0.20;
    }
    return tip;
}

function calcTotal(billValue) {
    let total;
    if (billValue > 50 && billValue < 300) {
        total = (billValue * 0.15) + billValue;
    } else {
        total = (billValue * 0.20) + billValue;
    }
    return total;
}

const tip1 = calcTip(100);
console.log(tip1);

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

console.log(tips);

const totals = [
    calcTotal(bills[0]),
    calcTotal(bills[1]),
    calcTotal(bills[2])
];
console.log(total);
*/

/*Introduction to Objects
const myCountry = {
    country: 'Belgium',
    capital: 'Brussels',
    language: ['Dutch', 'French', 'German'],
    population: 11,
    neighbours: ['Nederland', 'Luxemburg', 'Frankrijk', 'Duitsland'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language[0]}-speaking people,
            ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        return this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

console.log(myCountry);


// Dot vs Bracket Notation
//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language[0]}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population += 2);
console.log(myCountry['population'] -= 2);

myCountry.describe();
console.log(myCountry.checkIsland());
*/

/* for loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`voter number ${voter} is currently voting`);
}
*/

/* Looping Arrays, Breaking and Continuing
const population = [11, 488, 67, 33];
const percentages2 = [];
function percentageOfWorld(population) {
    return population / 7900 * 100;
}

for (let i = 0; i < population.length; i++) {
    percentages2[i] = percentageOfWorld(population[i]);
}

console.log(percentages2);
*/

/* Looping backwards and loops in loops
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}
*/

/* The while loop
const population = [11, 488, 67, 33];
const percentages3 = [];
function percentageOfWorld(population) {
    return population / 7900 * 100;
}
let i = 0;
while (i < population.length) {
    percentages3[i] = percentageOfWorld(population[i]);
    i++;
}

console.log(percentages3);
*/