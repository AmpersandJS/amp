var toString = Object.prototype.toString;


module.exports = function (obj) {
    return toString.call(obj) === '[object Arguments]';
};
