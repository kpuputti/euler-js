/*
Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to
10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/

var eulerutils = require('./eulerutils'),
    range = eulerutils.range,
    divisibleByAll = eulerutils.divisibleByAll;

function getSmallestNum() {
    var i, arr;

    i = 20;
    arr = range(1, 21);

    while(true) {

        if (divisibleByAll(i, arr)) {
            return i;
        }
        i += 20;
    }

    return null;
}

var result = getSmallestNum();

console.log(result);
