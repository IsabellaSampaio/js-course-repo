'use strict'; //it helps to find bugs and errors in the code, very important to use so we can avoid bugs and debug the code

/*
let hasDriversLicense = false; 
const passTest = true; 

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//const private = 'Audio'; 
*/

/* 
Functions
*/
/*
function logger () {
    console.log('My name is Isabella');
}

// calling, running or invoking the function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juice = fruitProcessor(5, 0)
console.log(juice);
console.log(fruitProcessor(10, 4)); */

//Functions help us write clean code and re-useable code; Dry code

//Built-in functions: console.log, Number...

//Function declaration 
//We can call them before they were declared in the code 
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

//Annonymous function / Function Expression
const calcAge2 = function (birthYear) {return 2037 - birthYear;} 

const age2 = calcAge2(2002);
console.log(age1, age2);

//Function in js is just a value, not a type 

//Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2002, "Isabella"));
console.log(yearsUntilRetirement(1987, "Nicholas")); */


/*
Calling functions inside other functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); 
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */

function calcAge(birthYear){return 2037 - birthYear;}


const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age > 0 ? 65 - age: -1; 

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired`);
        return retirement;
    }
}

yearsUntilRetirement(2002, "Isabella");
yearsUntilRetirement(1970, "Nicholas");