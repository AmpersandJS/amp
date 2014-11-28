var filter = require('../filter');
var flatten = require('../internal-flatten');
var contains = require('../contains');
var slice = Array.prototype.slice;


module.exports = function difference(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return filter(array, function (value) {
        return !contains(rest, value);
    });
};
