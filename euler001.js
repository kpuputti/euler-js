/*
Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var eulerutils = require('./eulerutils'),
    sum = eulerutils.sum,
    range = eulerutils.range;

function isDivisibleBy3or5(n) {
    return n % 5 === 0 || n % 3 === 0;
}

var result = sum(range(1, 1000).filter(isDivisibleBy3or5));

console.log(result);
