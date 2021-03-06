exports.assert = function (expr) {
    if (!expr) {
        throw new Error('Assertion failed');
    }
    return true;
};

exports.toArray = function (a) {
    return [].slice.call(a);
};

function add(x, y) {
    return x + y;
}

exports.sum = function (arr) {
    return arr.reduce(add);
};

exports.range = function () {
    var argsLen, start, end, i, arr;

    argsLen = arguments.length;
    exports.assert(argsLen === 1 || argsLen === 2);

    start = argsLen === 1 ? 0 : arguments[0];
    end = argsLen === 2 ? arguments[1] : arguments[0];
    arr = [];

    for (i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
};

exports.last = function (arr) {
    exports.assert(arr.length > 0);
    return arr[arr.length - 1];
};

exports.fibonacciUpTo = function (n) {
    var arr, len, val;

    arr = [1, 2];

    while (true) {
        len = arr.length;
        val = arr[len - 2] + arr[len - 1];
        if (val < n) {
            arr.push(val);
        } else {
            break;
        }
    }

    return arr;
};

exports.isEven = function (n) {
    return n % 2 === 0;
};

exports.isPrime = function (n) {
    var i, ceil;

    if (n < 2) {
        return false;
    } else if (n < 4) {
        return true;
    }

    ceil = Math.ceil(Math.sqrt(n));

    for (i = 2; i <= ceil; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

exports.primesUpTo = function (n) {
    var i, arr;

    arr = [];

    for (i = 0; i < n; i++) {
        if (exports.isPrime(i)) {
            arr.push(i);
        }
    }

    return arr;
};

exports.nPrimes = function (n) {
    var arr, i;

    i = 2;
    arr = [];

    while(arr.length < n) {

        if (exports.isPrime(i)) {
            arr.push(i);
        }
        i++;
    }

    return arr;
};

exports.getFactors = function (n) {
    var arr, ceil, i;

    arr = [];
    ceil = Math.ceil(Math.sqrt(n));

    for (i = 0; i <= ceil; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }

    return arr;
};

exports.reversed = function (arr) {
    var newArr = arr.slice();
    newArr.reverse();
    return newArr;
};

exports.arrayEquals = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        return arr1.every(function (val, i) {
            return val === arr2[i];
        });
    }
};

exports.divisibleByAll = function (n, arr) {
    return arr.every(function (val) {
        return n % val === 0;
    });
};

exports.min = function (arr) {
    return Math.min.apply(null, arr);
};

exports.max = function (arr) {
    return Math.max.apply(null, arr);
};

function multiply(x, y) {
    return x * y;
}

exports.product = function (arr) {
    return arr.reduce(multiply);
};

exports.toInt = function (s) {
    return parseInt(s, 10);
};
