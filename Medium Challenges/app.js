function falsyOrTruthy(elem1, elem2) {
  //if (!elem1) if the opposite of elem1 is true, the next line of code will run
  //so elem1 needs to be false because the oppositive of that is true

  return !elem1 ? elem1 : elem2;
}

console.log(falsyOrTruthy(0, 5));

// the original if statement will only run if the value is true. So, in order to make it run, you have to make it true
// if the opposite of falsy is true, return elem1
// it's only true if the opposite of false is true
// if elem1 is 0, you put !0 to get the opposite, it will only
// be true if 0 is false (!false === true)

//Q2. Return the length of any given array

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3, 4]));

//Q3. Get the last element in an array

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2, 50]));

//Q4. Find the sum of an array
//MEMORIZE THE FOLLOWING
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    //this is how you loop through every element in an array (memorize!)
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

//Q5. Add up the numbers from a single number

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

//Q6. Calculate the time

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
    if (timerSeconds.toString().length === 1) {
      timerSeconds = "0" + timerSeconds;
    }
  }
  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(67));
console.log(calcTime(50));
console.log(calcTime(300));

//Q7. Find the largest number

function getMax(arr) {
    let max = arr[1]
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max)
        max = arr[i]
    }
    return max
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

//when you need to look at every element of an array, you make a for loop
