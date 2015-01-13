var contains = require('amp-contains');
var isFunction = require('amp-is-function');
var map = require('amp-map');
var negate = require('amp-negate');
var pick = require('amp-pick');


module.exports = function omit(obj, iteratee, context) {
    if (isFunction(iteratee)) {
        iteratee = negate(iteratee);
    } else {
        var keys = map(Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1)), String);
        iteratee = function(value, key) {
            return !contains(keys, key);
        };
    }
    return pick(obj, iteratee, context);
};
