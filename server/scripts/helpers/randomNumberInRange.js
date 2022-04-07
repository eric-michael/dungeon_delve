/* 
    Return a random number given a min and max range, rounded to the nearest integer.
*/
function randomNumberInRange(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.randomNumberInRange = randomNumberInRange;