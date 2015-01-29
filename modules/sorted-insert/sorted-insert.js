var sortedIndex = require('amp-sorted-index');

module.exports = function sortedInsert(array, item) {
    array.splice(sortedIndex.apply(this, arguments), 0, item);
};
