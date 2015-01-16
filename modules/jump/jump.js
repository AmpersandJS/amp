var isNumber = require('amp-is-number');
var isArray = require('amp-is-array');
var indexOf = require('amp-index-of');


module.exports = function jump(array, currentItem, jumpSize, loop) {
    if (!isArray(array)) return array;
    var index = indexOf(array, currentItem);
    if (index === -1) {
        return;
    }
    if (!isNumber(jumpSize)) {
        jumpSize = 1;
    }

    var len = array.length;    
    var newIndex = index + jumpSize;

    // we jumped too far
    if (newIndex > (len - 1)) {
        return loop ? array[newIndex % len] : undefined;
    }

    // we're negative
    if (newIndex < 0) {
        if (!loop) return;
        newIndex = len + (newIndex % len);
        if (newIndex === len) {
            newIndex = 0;
        }
    }

    // return our new item
    return array[newIndex];
};
