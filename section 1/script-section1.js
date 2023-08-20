/*
let js = "Amazing";
let firstName = "Jonas";

//values -> smallest unit of information on js
console.log(firstName);
console.log(23)
console.log(40 + 8 + 23 - 10);
*/

/*
let jsIsFun = true;
console.log(jsIsFun)
console.log(typeof jsIsFun) //typeof operator
*/

/*
// let is mutable
let age = 30; 
age = 31; 

// const is not mutable, once declared  we can't change it 
const birthYear = 1991; 

// also, it's not possible to create const variables without initializing it
// its better to use const 
// there is also the var; its the old way of declaring variables

var job = "Teacher";
job = "Programmer"; 

//var is also mutable, like let
//declaring variables is not mandatory (like python)
*/

/*
// operators

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, ageJonas / 10, 2 **3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1
x--; // x = x = 1
console.log(x)

// Comparison operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

// Operator precedence 

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//math operators execute first than comparison operators 

let x, y;
x = y = 25-10-5;
console.log(x, y)
console.log(ageJonas, ageSarah);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge)

*/


// Coding challenge 1
// data 1 
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI)
*/

//data 2 

/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI)
*/

/*

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
 
const BMImark = markMass /  (markHeight * markHeight);
const BMIJohn = johnMass /  (johnHeight * johnHeight);

const markHigherBMI = BMImark > BMIJohn;
console.log(BMImark, BMIJohn, markHigherBMI);
*/

// Strings - tempalte literalls 

/*
const firstName = "Isabella";
const job = "programmer"
const birthYear = 2002;
const year = 2023; 

// bad string formatting
const isabella = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(isabella);

// string literal using `` and ${} --> template strings
const isabellaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(isabellaNew);

console.log(`String
multiple
lines`);
*/

/*
//conditional if-else block
const age = 15;

if(age >= 18) {
    console.log("Sarah can start driving license 👌");
}else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years 😉`);
}

const birthYear = 2002;
let century;

if( birthYear <= 2000) {
    century = 20;
}else {
    century = 21;
}

console.log(century);

*/

// Coding challenge 2 --> using template string and if-else block (conditionals)

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
*/

// Type conversion 

/*
const inputYear = "2002";
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Isabella")); // js returns NaN (Not a Number) 
console.log(typeof NaN); // NaN is still a number but a invalid one 

console.log(String(123)); 

// Type coercion 
console.log("I'am " + 23 + " years old"); // js automatically converts to 23 string
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
// Truthy or Falsy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Isabella"));
console.log(Boolean({}));
console.log(Boolean(''));

// to convert to boolean is also type coercion

const money = 0;
if(money){
    console.log("Don't spend it all ")
}else {
    console.log("You should get a job");
}

let height = 0; 
if(height){
    console.log("YAY! Height is defined")
}else {
    console.log("Height is Undefined");
} // bug

*/

// Equality operators 

/*
const age = '18';
if(age === 18) console.log("You just became an adult"); // === strict type, where it doesnt perform type coercion so the values must be the same

if(age == 18) console.log("You just became an adult"); // == loose typem where it does perform type coercion 

//avoid the == (loose) comparator because its a little buggy

const favNumber = Number(prompt("What's your fav number?"));
console.log(favNumber);
console.log(typeof favNumber);

if(favNumber === 12){ 
    console.log("Cool! 12 is an amazing number!"); // its going to work bc of the loose type 
}else if(favNumber === 7) {
    console.log("7 is also a cool number");
}else if(favNumber === 9){
    console.log("9 is also a cool number");
}else {
    console.log("Number is not 12, 7 or 9");
}

if(favNumber !== 12) console.log("Why not 12?");

//!== strict type (recommended)
//!= loose type (not recommended, buggy)

*/

/*
// Boolean Logic 
// && - and operation
// || - or operation

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log("Sarah is able to drive!");
// }else {
//     console.log("Someone else should drive...");
// }

const isTired = false; //C 

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive!");
}else {
    console.log("Someone else should drive...");
} */

/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if(scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
}else if(scoreKoalas > scoreKoalas){
    console.log("Koalas win the trophy");
}else{
    console.log("Both win the trophy");
}

Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
const minimumScore = 100;

if(scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore){
    console.log("Dolphins win the trophy", scoreDolphins, scoreKoalas);
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore){
    console.log("Koalas win the trophy", scoreDolphins, scoreKoalas);
}else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy", scoreDolphins, scoreKoalas);
}

Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
const minimumScore = 100;

if(scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore){
    console.log("Dolphins win the trophy", scoreDolphins, scoreKoalas);
}else if (scoreDolphins < scoreKoalas && scoreKoalas >= minimumScore){
    console.log("Koalas win the trophy", scoreDolphins, scoreKoalas);
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= minimumScore && scoreKoalas >= minimumScore){
    console.log("Both win the trophy", scoreDolphins, scoreKoalas);
}else {
    console.log("Both teams didn't reach the minimum score", scoreDolphins, scoreKoalas)
}
*/

// Switch case

// const day = prompt("What day is today? ");

// switch(day) {
//     case "monday": // day === monday
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday": //if we want to execute the same thing for two cases 
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day");
// }

// const day = prompt("What day is today? ");

// if(day === "monday"){
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// }else if (day === "tuesday"){
//     console.log("Prepare theory videos");
// }else if(day === "wednesday" || day === "thursday"){
//     console.log("Write code examples");
// }else if(day === "friday"){
//     console.log("Record videos");
// }else if(day === "saturday" || day === "sunday"){
//     console.log("Enjoy the weekend");
// }else {
//     console.log("Not a valid day");
// }

// the switch is becoming less and less used on js 

/*
// Statements vs Expressions the difference

// Expression -> peace of code that produces a value 
// produces value

3 + 4
1991 
true && false && !false

// Statment -> bigger peace of code that is executed but does not produce a value; Its like normal spoken language
// produces actions

if(23>10){
    const str = "23 is bigger"; // is an expression bc it produces a value
} // doesnt produce a value 

const me = "isabella";
console.log(`I'm ${2037 - 2002} years old`) // makes sense bc it a expression is expected in between the ${}
//console.log(`I'm ${if (23 > 10) const str = "23 is bigger";} `) // doesnt make sense bc the if block is an statment not an expression
console.log(`${me}`);

*/

/*
// Conditional operator (ternary)

const age = 23;
//age >=18 ? console.log("Is of full age and can drink wine") : console.log("Can't drink wine")

//is basically a if-else block but in-line using ? (if part) and : (else part)
// an operator always produces a value, so its an expression

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = "wine";
}else{
    drink2 = "water";
}
console.log(drink2);

//ternary operator is better and more easier to write 

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`)
//ternary operator is great when making quick comparisons 

*/

/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 



const bill = Number(prompt("What was the bill value? "));
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;

console.log(`The bill was ${bill}
The tip was ${bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill} 
And the total value was ${bill + (bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill)}`)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/