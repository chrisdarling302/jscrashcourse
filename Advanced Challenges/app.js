//Q1. Show Rating
//Given a rating, display a star (*) for each full rating and a bull-stop (.) for each half rating

/** 
function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < 4; ++i) {
        if (i === 3) {
            ratings = ratings + "*"
        }
        else {
        ratings = ratings + "* "
    }
    }
    return ratings
}

*/

/**
function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < rating; ++i) {
        ratings = ratings + "*"
        if (i !== rating - 1) {//if it's not the final iteration, add space
            ratings = ratings + " "
        }
    }
    return ratings
}
 */

//first initialise an empty string
//loop through the rounded down rating
  //add a star for every interation
  //if it's not the last iteration add a space

  //if the number is not an integer
    //add a full stop
    //return it

function showRating(rating) {
    let ratings = "";
    for (let i=0; i < Math.floor(rating); ++i) {
        ratings += "*"
        if (i !== Math.floor(rating) - 1) {//if it's not the final iteration, add space
            ratings += " "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    return ratings;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

//Q2. Sort by lowest to highest price.
//Given an array of numbers, return the prices sorted by low to high

function sortLowToHigh(numbers) {
        return numbers.sort((a, b) => a - b); //.sort() sorts alphabetically. If you want to sort numbers, you have to memorize this.
        //if you want to sort high to low, just flip it around ((a, b) => b - a)        
        //use es6
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 60]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

//Q3. Sort by highest to lowest price
//Given an array of objects, return the prices sorted by high to low.

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price); //using ES6
    //need to get the property of the object you are iterating over
}

console.log(sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
])
);

//Q4. Promises (Homework)
//On Youtube, watch:

//"The Async Await Episode | Promised"
// - Fireship (watch on 1x speed, no need to code along)

//"Async Await JavaScript ES7"
// - Techsith (1.5x speed)

//"Async JS Crash Course - Callbacks, Promises, Async Await"
// - Travsery Media (1.5x speed, watch if still trying to understand promises)

//Q5. Find all the posts by a single user
//Call this API "https://jsonplaceholder.typicode.com/posts" and return
//all the posts vby any given user id.

//fetch "https://jsonplaceholder.typicode.com/posts"

async function postsByUser(userId) {//async goes before the function
    //await goes insidee the function before the promise you want to wait for
   const promise = await fetch ("https://jsonplaceholder.typicode.com/posts");
   const result = await promise.json()

   const posts = result.filter(element => element.userId === userId)
//if the property of userId is getting passed into the function, 
//if those 2 are equal, pass it into the array. userId of 4 is getting passed
//into the parameter of the function

   console.log(posts)
}

postsByUser(4);

//Q6. First 6 Incomplete Todos
//Call this API "https://jsonplaceholder.typicode.com/todos" and
//return the first 6 incomplete todo's from the result.

async function firstSixIncomplete(userId) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")
    
    const result = await promise.json()

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);

    console.log(incompleteTasks);
}

firstSixIncomplete(6)