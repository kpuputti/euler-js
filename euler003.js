/*
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var eulerutils = require('./eulerutils'),
    last = eulerutils.last,
    getFactors = eulerutils.getFactors,
    isPrime = eulerutils.isPrime;

var result = last(getFactors(600851475143).filter(isPrime));

console.log(result);
