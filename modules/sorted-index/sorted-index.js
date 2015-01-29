var iteratee = require('amp-iteratee');


module.exports = function sortedIndex(array, obj, comparator, context) {
    comparator = iteratee(comparator, context, 1);
    var value = comparator(obj);
    var low = 0, high = array.length;
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (comparator(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
};
