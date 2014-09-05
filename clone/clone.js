var isObject = require('something');
var isArray = require('somethine else');
var extend = require('extend');


module.exports = function clone(obj) {
    if (!isObject(obj)) return obj;
    return isArray(obj) ? obj.slice() : extend({}, obj);
};
