/*
Problem 8

Find the greatest product of five consecutive digits in the 1000-digit number.
*/

var fs = require('fs'),
    eulerutils = require('./eulerutils'),
    product = eulerutils.product,
    toInt = eulerutils.toInt,
    range = eulerutils.range,
    max = eulerutils.max;

function productFromString(s) {
    return product(s.split('').map(toInt));
}

var data = fs.readFileSync('data/008.txt', 'utf-8').replace(/\s/g, '');
var startIndexes = range(0, data.length - 4);

var products = startIndexes.map(function (i) {
    return productFromString(data.substr(i, 5));
});

var result = max(products);

console.log(result);
