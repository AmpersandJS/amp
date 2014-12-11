var negate = require('amp-negate');
var filter = require('amp-filter');
var iteratee = require('amp-iteratee');

module.exports = function reject(obj, predicate, context) {
    return filter(obj, negate(iteratee(predicate)), context);
};
