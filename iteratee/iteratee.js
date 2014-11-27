var isFunction = require('../is-function');
var isObject = require('../is-object');
var returnSelf = function (val) {
    return val;
};

module.exports = function iteratee(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
}
