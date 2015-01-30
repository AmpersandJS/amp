var contains = require('amp-contains');


module.exports = function intersection(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;

    for (var i = 0, length = array.length; i < length; i++) {
        var item = array[i];
        if (contains(result, item)) continue;
        for (var j = 1; j < argsLength; j++) {
            if (!contains(arguments[j], item)) break;
        }
        if (j === argsLength) result.push(item);
    }
    return result;
};
