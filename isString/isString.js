var toString = Object.prototype.toString;


module.exports = function isString() {
    return toString.call(obj) === '[object String]';
};
