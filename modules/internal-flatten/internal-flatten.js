var isArray = require('../is-array');
var isArguments = require('../is-arguments');


var flatten = function flatten(input, shallow, strict, startIndex) {
    var output = [], idx = 0, value;
    for (var i = startIndex || 0, length = input && input.length; i < length; i++) {
        value = input[i];
        if (value && value.length >= 0 && (isArray(value) || isArguments(value))) {
            //flatten current level of array or arguments object
            if (!shallow) value = flatten(value, shallow, strict);
            var j = 0, len = value.length;
            output.length += len;
            while (j < len) {
                output[idx++] = value[j++];
            }
        } else if (!strict) {
            output[idx++] = value;
        }
    }
    return output;
};

module.exports = flatten;
