var unique = require('amp-unique');
var flatten = require('amp-internal-flatten');

module.exports = function union() {
    return unique(flatten(arguments, true, true));
};
