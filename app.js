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

let cash = 30
let price = 40
let isStoreOpen = true

let str = isStoreOpen && cash >= price ? "give receipt" : "do not give receipt"
console.log(str)