/*
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var eulerutils = require('./eulerutils'),
    arrayEquals = eulerutils.arrayEquals,
    reversed = eulerutils.reversed;

function isPalindromic(n) {
    var arr = n.toString().split('');
    return arrayEquals(arr, reversed(arr));
}

function getLargestPalindromic() {
    var i, j, largest, val;

    largest = 0;

    for (i = 999; i > 0; i--) {
        for (j = 999; j > 0; j--) {

            val = i * j;

            if (isPalindromic(val) && val > largest) {
                largest = val;
            }
        }
    }

    return largest;
}


var result = getLargestPalindromic();

console.log(result);
