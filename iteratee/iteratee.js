var isFunction = require('../is-function');
var isObject = require('../is-object');
var createCallback = require('../create-callback');
var matches = require('../matches');
var property = require('../property');
var identity = function (val) { return val; }


module.exports = function iteratee(value, context, argCount) {
    if (value == null) return identity;
    if (isFunction(value)) return createCallback(value, context, argCount);
    if (isObject(value)) return matches(value);
    return property(value);
};
