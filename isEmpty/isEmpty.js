var isArray = require('');
var isString = require('');
var isArguments = require('');
var has = require('has');


module.exports = function isEmpty(obj) {
    if (obj == null) return true;
    if (isArray(obj) || isString(obj) || isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (has(obj, key)) return false;
    return true;
}
