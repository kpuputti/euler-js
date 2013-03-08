/*
Problem 6

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.
*/

var eulerutils = require('./eulerutils'),
    range = eulerutils.range,
    sum = eulerutils.sum;

var nums = range(1, 101);
var pow2 = function (n) { return Math.pow(n, 2); };

var result = pow2(sum(nums)) - sum(nums.map(pow2));

console.log(result);
