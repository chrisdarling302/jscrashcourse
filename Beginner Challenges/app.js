//Add two numbers
function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 5));

//Convert Hours into Seconds
let hoursIntoSeconds = (hours) => {
  return hours * 3600;
};

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

//Calculate the Perimeter of a Rectangle

function calcPerimeter(length, width) {
  return 2 * length + 2 * width;
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(10, 20));

//Calculate Area of Triangle
function calcAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(10, 20));
console.log(calcAreaOfTriangle(20, 20));

//Extend a String
function appendFrontend(string) {
  return string + "Frontend";
}

console.log(appendFrontend("Apple"));

//Greater than 100
function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

//Less than or Equal to Zero

function lessThanOrEqualToZero(num) {
  return num <= 0;
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

//Opposite boolean
function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

//Is not the number 0

function isNotZero(elem) {
  return elem !== 0;
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

//Calculate the remainder

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))

//Is the number odd?

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(1))
console.log(isOdd(10))

//If a number is event, return 1 otherwise return -1 (using a Ternary Operator)
function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

//Check if a user is logged in AND subscribed

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return (loggedIn === "LOGGED_IN") && (subscribed === "SUBSCRIBED")
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"))
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"))

//Check if a user is logged in OR subscribed
function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return (loggedIn === "LOGGED_IN") || (subscribed === "SUBSCRIBED")
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));