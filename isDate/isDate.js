var toString = Object.prototype.toString;


module.exports = function isFunction() {
    return toString.call(obj) === '[object Date]';
};
