var toString = Object.prototype.toString;
var isArray = Array.isArray;


module.exports = isArray || function isArray(obj) {
    return toString.call(obj) === '[object Array]';
};
