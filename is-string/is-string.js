var toString = Object.prototype.toString;


module.exports = function isString(obj) {
    return toString.call(obj) === '[object String]';
};
