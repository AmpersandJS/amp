var flatten = require('amp-internal-flatten');
var isFunction = require('amp-is-function');
var contains = require('amp-contains');
var negate = require('amp-negate');
var pick = require('amp-pick');
var map = require('amp-map');


module.exports = function omit(obj, iteratee, context) {
    if (isFunction(iteratee)) {
        iteratee = negate(iteratee);
    } else {
        var keys = map(flatten(arguments, false, false, 1), String);
        iteratee = function(value, key) {
            return !contains(keys, key);
        };
    }
    return pick(obj, iteratee, context);
};
