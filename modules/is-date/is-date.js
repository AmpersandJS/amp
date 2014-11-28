var toString = Object.prototype.toString;


module.exports = function isFunction(obj) {
    return toString.call(obj) === '[object Date]';
};
