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

//array filter method...
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
//remove "("around element when there's only one variable type)
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

//let grades = ['A+', 'A', 'FAIL']

//let goodGrades = grades.filter(element => element !== 'FAIL')

//console.log(goodGrades)

//done without using filter method, push to new array method by indexing the array
/**let grades = ['A+', 'A', 'FAIL']
let goodGrades = []

for (let i = 0; i < grades.length; ++i) {
  if (grades[i] !== 'FAIL') {
    goodGrades.push(grades[i]);
  }
}

console.log(goodGrades);
*/

// arr.map method.
// it accepts a callback that looks like this: arr.map(() => {})

/**let arr = [1, 4, 9, 16]

let newArray = arr.map((element) => {
  console.log(element)
  return undefined;
})

console.log(newArray)
*/

//here's how to turn it into one line of code:
/**let arr = [1, 4, 9, 16]

let newArray = arr.map(element => undefined)

console.log(newArray)
*/

/** Long Way for arr.map
let dollars = [1, 5, 10, 3]

let dollarsToCents = dollars.map((element) => {
  console.log(element)
  return element * 100
})

console.log(dollarsToCents)
*/

//short way for arr.map
/** 
let dollars = [1, 5, 10, 3]

let dollarsToCents = dollars.map(element => element * 100)

console.log(dollarsToCents)
*/
//now use the for method

/** 
let dollars = [1, 5, 10, 3]
let cents = [];

for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100);
}

console.log(cents);
*/

//OBJECTS
/** 
let users = [
  {
    username: "David",
    email: "david@fes.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "david bragg001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Nick",
    email: "nick@fes.com",
    password: "nick123",
    subscriptionStatus: "VIP",
    discordId: "nick dawson",
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log the user in - the details are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login("david@fes.com", "test123");

function register(user) {
  users.push(user);
}

register({
  username: "zen",
  email: "zen@fes.com",
  password: "zen123",
  subscriptionStatus: "VIP",
  discordId: "zenfrank",
  lessonsCompleted: [0, 1],
});

console.log(users);
*/

//DOM

// First way of accessing an element
//console.log(document.querySelector("#title"));

//Second way of accessing an element
//console.log(document.getElementById("title"));

//Change HTML
//console.log(document.querySelector(".title").innerHTML = "Frontend Simplified");

//Change CSS
//console.log(document.querySelector(".title").style.fontSize = "56px");

//function changeTitleToRed() {
//document.querySelector(".title").style.color = "red"
//console.log("clicked")
//}
//How to toggle dark mode and light mode
/**function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark-theme")
}
  */

//PROMISES
// console.log(fetch ("https://jsonplaceholder.typicode.com/users/1"))
/**const emailRef = document.querySelector(".email");
// 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email
  });
  */

// 2. Async/Await
