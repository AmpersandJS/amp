var isFunction = require('amp-is-function');
var map = require('amp-map');
var slice = Array.prototype.slice;


module.exports = function invoke(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = isFunction(method);
    return map(obj, function(value) {
        var func = isFunc ? method : value[method];
        return func == null ? func : func.apply(value, args);
    });
};
