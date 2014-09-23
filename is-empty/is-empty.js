var isArray = require('../is-array');
var isString = require('../is-string');
var isArguments = require('../is-arguments');
var hasOwn = Object.prototype.hasOwnProperty;


module.exports = function isEmpty(obj) {
    if (obj == null) return true;
    if (isArray(obj) || isString(obj) || isArguments(obj)) return obj.length === 0;
    for (var key in obj) {
        if (hasOwn.call(obj, key)) return false;
    }
    return true;
}
