/**let subscribed = false;
let loggedIn = false;
if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
} else {
  console.log("tell user to log into account");
}*/

//let cash = 20;
//let price = 40;
//let difference = cash - price;

/**if (cash > price) {
  console.log(`you paid extra - here's ${difference} dollars change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enough money - you still owe ${difference * -1} dollars`);
}
  */
// do the calculation in the variable setting using let. Then add the variable into the ${variable here}
// you can do the calculation in ${} but it's cleaner if you use the let variable = calcuation

//Comparison and Logical Operators
/**let cash = 30
let price = 40
let isStoreOpen = false

/**if ("") {
  console.log("print the receipt")
}
else {
  console.log("falsy value")
}
*/
// the isStoreOpen === true is the same as isStoreOpen because isStoreOpen is a Boolean in and of itself. 
// want to check if the opposite is true use "!" !isStoreOpen

/**let val = "David"

if (val) {
  console.log(!!val)
} // for this line to run, the variable just needs to be true
else {
  console.log(!!val)
} */

//Ternary Operators

/**let hot = ""

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let subscribed = false
let loggedIn = true

let str = subscribed || loggedIn ? 'show video' : 'hide video'
console.log(str) */

/** let cash = 30
let price = 40
let isStoreOpen = true

let str = isStoreOpen && cash >= price ? "give receipt" : "do not give receipt"
console.log(str)
*/
//let count = 1

//while (count <=100) {
 // count = count + 1;
 // console.log(count)
//}

/**for (let i = 0; i < 100; i++) {
  console.log(i +1)
}
  */

/** write a for-loop that loops through 1 to 20
 * if the number is divisible by 3, print "Frontend"
 * if the number is divisible by 5, print "Simplified"
 * If the number is difivisble by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by either 3 or 5, print the number
 * 
 * example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * 4 -> 4
 * 5 -> "Simplified"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -. "Simplified"
 */

/** for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`)
  }
  else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`)
  }
  else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`)
  }
  else {
    console.log (`${i} -> ${i}`)
  }
  }
  */

 /**  const str = "Frontend Simplified"
  for (let i = 0; i < str.length; ++i) {
    console.log(str[i])
  }

"Frontend Simplified".length
*/

// DRY - Don't Repeat Yourself

//Function definition (can define function once)
/**function welcomePersonToFES(firstName, lastName) {
  console.log(`Welcome to FES, ${firstName} ${lastName}`)
}

//call the function (can call function multiple times)
welcomePersonToFES('David', "Bragg")
welcomePersonToFES("john", "Doe")
*/

/** function fn() {
  return "my return" //exits the function completely
  console.log("my function")
}

fn()

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2
}
  */

//console.log(sumOfTwoNumbers(10,10));

/**function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0))
console.log(convertCelsiusToFahrenheit(16))

F = C * 1.8 + 32
*/

//function convertCelsiusToFahrenheit(celsius) {
 // return celsius * 1.87 + 32
//}

//console.log(convertCelsiusToFahrenheit(0));

/**const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0))
*/

//ARRAYS



// arr.filter(() => {}) Need to memorize the syntax
/**let newArr = arr.filter((element) => {
  console.log(element)
  if (element < 50) {
    return true;
  }
})

console.log(newArr)
*/
//let arr = [20, 30, 40, 50, 100]
//remove (around element when there's only one variable)
/**let newArr = arr.filter(element => {
  //console.log(element) get rid of this because it's doing nothing
  return element < 50 
  })

console.log(newArr)
*/

/**let newArr = arr.filter(element => element < 50)
  //console.log(element) get rid of this because it's doing nothing


console.log(newArr)
*/

let grades = ['A=', 'A', 'FAIL']

//let goodGrades = grades.filter(element => element !== 'FAIL')


//console.log(goodGrades)

for (let i = 0; i < grades.length; ++i) {
  console.log(grades[i]);
}
