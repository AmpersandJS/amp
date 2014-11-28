var toString = Object.prototype.toString;
var hasOwn = Object.prototype.hasOwnProperty;
var isArgs = function isArgs(obj) {
    return toString.call(obj) === '[object Arguments]';
};

// for IE <9
if (!isArgs(arguments)) {
    isArgs = function (obj) {
        return obj && hasOwn.call(obj, 'callee');
    };
}

module.exports = isArgs;
