var every = require('../every');
var isArray = require('../is-array');
var isArguments = require('../is-arguments');
var concat = Array.prototype.concat;
var push = Array.prototype.push;


var flatten = function flatten(input, shallow, strict, output) {
    if (shallow && every(input, isArray)) {
        return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
        var value = input[i];
        if (!isArray(value) && !isArguments(value)) {
            if (!strict) output.push(value);
        } else if (shallow) {
            push.apply(output, value);
        } else {
            flatten(value, shallow, strict, output);
        }
    }
    return output;
};

module.exports = flatten;
