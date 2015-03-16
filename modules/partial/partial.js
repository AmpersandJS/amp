var slice = Array.prototype.slice;

var partial = module.exports = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
        var position = 0;
        var args = boundArgs.slice();
        for (var i = 0, length = args.length; i < length; i++) {
            if (args[i] === partial) args[i] = arguments[position++];
        }
        while (position < arguments.length) args.push(arguments[position++]);
        return func.apply(this, args);
    };
};