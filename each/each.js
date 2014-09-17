var objKeys = require('../keys');


// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
        return func.call(context, value);
    };
    case 2: return function(value, other) {
        return func.call(context, value, other);
    };
    case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
    };
    }
    return function() {
        return func.apply(context, arguments);
    };
};


// _.keys was replaced with native Object.keys()
module.exports = function each(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
        for (i = 0; i < length; i++) {
            iteratee(obj[i], i, obj);
        }
    } else {
        var keys = objKeys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
        }
    }
    return obj;
};
