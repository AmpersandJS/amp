var iteratee = require('amp-iteratee');
var pluck = require('amp-pluck');
var map = require('amp-map');

module.exports = function sortBy(array, comparator, context) {
    comparator = iteratee(comparator, context);
    return pluck(map(array, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: comparator(value, index, list)
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
