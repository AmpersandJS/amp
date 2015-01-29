var sortedIndex = require('amp-sorted-index');
var splice = Array.prototype.splice;


module.exports = function sortedInsert(array, item) {
    var index = sortedIndex.apply(this, arguments);
    splice.call(array, index, 0, item);
    return index;
};
