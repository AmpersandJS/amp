var filter = require('amp-filter');
var identity = function (val) { return val; };


module.exports = function compact(arr) {
    return filter(arr, identity);
};
