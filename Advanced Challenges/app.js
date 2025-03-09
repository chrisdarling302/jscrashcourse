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