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
