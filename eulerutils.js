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
