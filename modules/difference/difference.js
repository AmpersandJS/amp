var filter = require('../filter');
var flatten = require('../internal-flatten');
var contains = require('../contains');


module.exports = function difference(array) {
    var rest = flatten(arguments, true, true, 1);
    return filter(array, function (value) {
        return !contains(rest, value);
    });
};
