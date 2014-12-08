var filter = require('amp-filter');
var flatten = require('amp-internal-flatten');
var contains = require('amp-contains');


module.exports = function difference(array) {
    var rest = flatten(arguments, true, true, 1);
    return filter(array, function (value) {
        return !contains(rest, value);
    });
};
