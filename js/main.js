// Functions and Conditionals assignment
// Read the assignment text CAREFULLY

/*
1.

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/

//! code here
const evenOrOdd = (num) => {
  return num % 2 ? "odd" : "even"
}

console.log(evenOrOdd(12))

function evenOrOddShort(num) {
  return num % 2 ? "odd" : "even"
}


const evenOrOddComplex=(num)=> {
  if (num / 2 === Math.floor(num / 2)) {
    return "even"
  } else {
    return "odd"
  }
}

console.log(6/2, Math.floor(6/2))
console.log(evenOrOddComplex(7))
  /*
  2.
 
  Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
  or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:
 
  const variable = statement ? "this if true" : "this if not true"
 
  Try changing userMale to both true and false and console.log your new variable,
  to see that your conditional is working.
  */

//! code here
 const userMale = true
 const userTitle = userMale ? "Mr." : "Mrs."


 function isUserMale(sex) {
  return sex === "Male" ? console.log("Mr.") : console.log("Mrs.")
 }
 
 isUserMale("Male")
 isUserMale("AnythingButMale")

  /*
  3.
 
  Write a function that takes in 2 parameters:
 
   - A name (string)
   - An hour of the day (number)
 
  The function should return:
  "Good night (name received)" if the hour received is 0-6
  "Good morning (name received)" if the hour received is 6-12
  "Good day (name received)" if the hour received is 12-18
  "Good evening (name received)" if the hour received is 18-24
  "Invalid time" if the hour received is greater than 24
 
  Use whichever function syntax you want.
  Use template literal in your return: `This is a template literal ${variable}`
 
  Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
  Console log the function a few times to show that it's working.
  */
 
//! code here
function greeting(string, number) {
  if (number <=6) {
    return `Good night, ${string}`;
  } else if (number <= 12) {
    return `Good morning, ${string}`;
  } else if (number <= 18) {
    return `Good day, ${string}`;
  } else if (number <= 24) {
    return `Good evening, ${string}`
  } else {
    return "invalid time"
  }
}

console.log(greeting("Bob", 12))

  /*
 
  4.
 
  Write a function that takes in 2 numbers as parameters.
 
  In your function, check which of the numbers received is the largest,
  then return the sum of the largest number divided by the smaller.
 
  Use arrow function syntax.
 
  Example: your function receives 13 and 24, it should return the sum of 24/13
 
  */
 
//! code here
 
const divideLargeBySmall = (num1,num2) => {
  if (num1 > num2) {
    return num1 / num2
  } else if (num1 < num2) {
    return num2/num1
  } else {
    return "The numbers are equal"
  }
}

console.log(divideLargeBySmall(10,20))

  /*
  5.
 
  Write an IF/ELSE conditional statement that checks whether username is empty,
  that the user age is 18+, and that userIsBlocked is false.
 
  (HINT: Use the && (logical AND) to check several things in one IF statement)
 
  If all of these conditions are true, change the userIsLoggedIn variable to true and
  and the goToPage variable to "/home" then console.log a welcome message.
 
  If any of the conditions for logging in are not met, console.log an error message.
 
  Try changing the values of the variables to make sure your IF/ELSE conditional
  can handle all cases correctly
  */
 
//! code here

const userName = "Gene";
const userAge = 18;
let userisBlocked = false;
let userIsLoggedIn = false;
let goToPage = "";

// if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
//   userIsLoggedIn = true;
//   goToPage ="/home"
//   console.log(`Logging in ${userName}`)
// } else {
//   console.error("Conditions not met!")
// }

const conditions = () => {
  if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
    userIsLoggedIn = true;
    goToPage ="/home"
    return `Logging in ${userName}`
  } else {
    return "Conditions not met!"
  }
}

console.log(conditions())

const conditionalsWithPara = (userName, userAge, userBlocked) => {
  if (userName !== "" && userAge >= 18 && userBlocked === false) {
    userIsLoggedIn = true;
    goToPage ="/home"
    return `Logging in ${userName}`
  } else {
    return "Conditions not met!"
  }
}

console.log(conditionalsWithPara("Bob Belcher", 18, false))
  /*
  6.
 
  EXTRA CHALLENGE
 
  This is not mandatory, only for those who want an extra challenge.
 
  Make a function called coolMaker that takes in 1 parameter.
 
  If the parameter received is a string:
  Return the string with "😎" added to the beginning and end
 
  If the parameter received is a number:
  Double it, convert it to a string and return it with "😎" added to the beginning and end.
 
  If the parameter received is a boolean:
  If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
  return "😎Chill😎"
 
  If the parameter received is any other datatype:
  Return "😎Primitive values only😎"
 
  Use arrow function syntax.
 
  Console log the function call with a few different datatypes to show that it's working
  */
 
//! code here

function coolMaker(input) {
  if (typeof input === "string") {
    return "😎" + input + "😎"
  }
}

console.log(coolMaker("1"))
 
  /*
  7.
 
  EXTRA CHALLENGE
 
  fix dette så man får ut: the number 9 was found!
   tips: legg det i en funksjon og lag en konsoll log som kjøres når loopen er ferdig
  */
 
 
   let randomNum = Math.ceil(Math.random() * 10) // expected output: 1-10
 
   let x = 1
  
   //! change the code below
   while (x != randomNum) {
     console.log("trying to find the number.. " + x)
     if (x === 9) break;
     x++
   }
  
   /*
   8.
  
   EXTRA CHALLENGE
  
    lag while loopen over til en fungerende for loop:
    */
 