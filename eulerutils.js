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

