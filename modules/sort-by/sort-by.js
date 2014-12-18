var pluck = require('amp-pluck');
var map = require('amp-map');
var iteratee = require('amp-iteratee');

module.exports = function sortBy(obj, sort, context) {
    sort = iteratee(sort, context);
    return pluck(map(obj, function(value, index, list) {
        return {
            value: value,
            index: index,
            criteria: sort(value, index, list)
        };
    }).sort(function(left, right) {
        var a = left.criteria;
        var b = right.criteria;
        if (a !== b) {
            if (a > b || a === void 0) return 1;
            if (a < b || b === void 0) return -1;
        }
        return left.index - right.index;
    }), 'value');
};
