var isObject = require('amp-is-object');
var isArray = require('amp-is-array');
var extend = require('amp-extend');


module.exports = function clone(obj) {
    if (!isObject(obj)) return obj;
    return isArray(obj) ? obj.slice() : extend({}, obj);
};
