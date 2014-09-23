var toString = Object.prototype.toString;


module.exports = function isRegExp(obj) {
    return toString.call(obj) === '[object RegExp]';
};
