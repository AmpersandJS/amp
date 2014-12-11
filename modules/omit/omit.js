var isFunction = require('amp-is-function');
var map = require('amp-map');
var contains = require('amp-contains');
var flatten = require('amp-flatten');
var pick = require('amp-pick');
var negate = require('amp-negate');

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
