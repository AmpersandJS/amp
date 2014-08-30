var toString = Object.prototype.toString;


module.exports = function isNumber() {
    return toString.call(obj) === '[object RegExp]';
};
