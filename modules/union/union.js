var flatten = require('amp-internal-flatten');
var unique = require('amp-unique');

module.exports = function union() {
    return unique(flatten(arguments, true, true));
};
