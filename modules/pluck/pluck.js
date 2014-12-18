var map = require('amp-map');
var property = require('amp-property');

module.exports = function(obj, key) {
    return map(obj, property(key));
};
