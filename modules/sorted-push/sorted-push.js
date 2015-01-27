var iteratee = require('amp-iteratee');

function identity (value) { return value; }

function sortedIndexOf (item, array, comparator) {
    if (comparator == null) comparator = identity;
    var minIndex = 0;
    var length = array.length;
    var maxIndex = length - 1;
    var currentIndex, currentItem, currentCriteria;
    var compare = iteratee(comparator, item);
    var criteria = compare(item, length, item);
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentItem = array[currentIndex];
        currentCriteria = compare(currentItem, currentIndex, array);
        if (currentCriteria < criteria) {
            minIndex = currentIndex + 1;
        } else if (currentCriteria > criteria) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
    return maxIndex + 1;
}

module.exports = function sortedPush(item, array) {
    array.splice(sortedIndexOf.apply(this, arguments), 0, item);
};
