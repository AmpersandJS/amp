var toString = Object.prototype.toString;


module.exports = function isRegExp() {
    return toString.call(obj) === '[object RegExp]';
};
