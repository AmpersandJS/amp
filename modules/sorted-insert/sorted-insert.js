var sortedIndex = require('amp-sorted-index');


module.exports = function sortedInsert(array, item) {
    var index = sortedIndex.apply(this, arguments);
    array.splice(index, 0, item);
    return index;
};
