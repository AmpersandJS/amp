var slice = Array.prototype.slice;
var isObject = require('amp-is-object');

module.exports = function partial(func) {
    var boundArgs = slice.call(arguments, 1);
    return function bound() {
        var position = 0;
        var args = boundArgs.slice();
        for (var i = 0, length = args.length; i < length; i++) {
            if (args[i] === partial) args[i] = arguments[position++];
        }
        while (position < arguments.length) args.push(arguments[position++]);
        if (!(this instanceof bound)) return func.apply(this, args);
        var self = Object.create(func.prototype);
        var result = func.apply(self, args);
        if (isObject(result)) return result;
        return self;
    };
};
