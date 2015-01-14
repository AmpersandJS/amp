var createCallback = require('amp-create-callback');
var isFunction = require('amp-is-function');


module.exports = function pick(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (isFunction(iteratee)) {
        iteratee = createCallback(iteratee, context);
        for (key in obj) {
            var value = obj[key];
            if (iteratee(value, key, obj)) result[key] = value;
        }
    } else {
        var keys = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1));
        obj = new Object(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            if (key in obj) result[key] = obj[key];
        }
    }
    return result;
};
