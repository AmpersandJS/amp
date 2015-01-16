var property = require('amp-property');
var map = require('amp-map');


module.exports = function(obj, key) {
    return map(obj, property(key));
};
