var isBoolean = require('../is-boolean');
var contains = require('../contains');
var getIteratee = require('../iteratee');


module.exports = function unique(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!isBoolean(isSorted)) {
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
    }
    if (iteratee != null) iteratee = getIteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
        var value = array[i];
        var computed = iteratee ? iteratee(value, i, array) : value;
        if (isSorted) {
            if (!i || seen !== computed) result.push(value);
            seen = computed;
        } else if (iteratee) {
            if (!contains(seen, computed)) {
                seen.push(computed);
                result.push(value);
            }
        } else if (!contains(result, value)) {
            result.push(value);
        }
    }
    return result;
};
