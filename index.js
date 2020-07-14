/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 19;

if(votingAge > 18){
    console.log('true');
} else {
    console.log('false');
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let weather = 'rainy';

if(weather === 'rainy'){
    console.log('its raining');
} if(weather !== 'rainy'){
    weather = 'i dunno what it is';
}

console.log(weather);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var text = '1999';
var integer = parseInt(text, 10);
console.log(integer);



//Task d: Write a function to multiply a*b 
const multi = (a, b) => {
    return a*b;
}
console.log(multi(2,4));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
const dogYears = (a) => {
    return a*7;
}

console.log(dogYears(26));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

let dogAge = 1;

function dogFeeder(a) {
    if(dogAge >= 1){
        if(a < 5) {
            return a*0.05
        } else if(a >= 5 && a <= 10) {
            return a*0.04
        } else if(a >= 11 && a <= 15) {
            return a*0.03
        } else return a*0.02;
    }

    if(dogAge < 1){
        if(a >= 2 && a <= 4) {
            return a*0.10
        }
        if(a > 4 && a <= 7) {
            return a*0.05
        }
        if(a > 7 && a <= 12) {
            return a*0.04
        }
    }
}

console.log(dogFeeder(15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function game(a) {
    if(a == 'rock') {
        number = 0
    } else if(a == 'paper') {
        number = 1
    } else if(a == 'scissors') {
        number = 2
    }

    let comp = Math.floor(Math.random()*3);

    if(number === comp) {
        return 'tie';
    } else if(number === 0 && comp === 1) {
        return 'Paper beats Rock, You Lose!';
    } else if(number === 0 && comp === 2) {
        return 'Rock beats Scissors, You Win!';
    } else if(number === 1 && comp === 0) {
        return 'Paper beats Rock, You Win!';
    } else if(number === 1 && comp === 2) {
        return 'Scissors beats Paper, You Lose!';
    } else if(number === 2 && comp === 0) {
        return 'Rock beats Scissors, You Lose!';
    } else if(number === 2 && comp === 1) {
        return 'Scissors beats Paper, You Win!';
    }
}

console.log(game('rock'));

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function metricConvert(a){
    return a*0.621371
}

console.log(metricConvert(4));




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCm(a){
    return a*30.48
}  

console.log(feetToCm(2));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(a) {
    for (let i = a; i >= 1; i--) { 
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around, ${i-1} bottles of soda on the wall!`);
    }
}

console.log(annoyingSong(3))





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function gradingTool(grade) {
    if(grade <= 100 && grade >= 90) {
        return 'A';
    } else if(grade < 90 && grade >= 80) {
        return 'B';
    } else if(grade < 80 && grade >= 70) {
        return 'C';
    } else if(grade < 70 && grade >= 60) {
        return 'D';
    } else if(grade < 60) {
        return 'F';
    }
}

console.log(gradingTool(80))
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





