var isArray = require('amp-is-array');
var isString = require('amp-is-string');
var isArguments = require('amp-is-arguments');
var isNumber = require('amp-is-number');
var isNan = require('amp-is-nan');
var keys = require('amp-keys');


module.exports = function isEmpty(obj) {
    if (obj == null) return true;
    if (isArray(obj) || isString(obj) || isArguments(obj)) return obj.length === 0;
    if (isNumber(obj)) return obj === 0 || isNan(obj);
    if (keys(obj).length !== 0) return false;
    return true;
};
