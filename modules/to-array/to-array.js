var values = require('amp-values');
var map = require('amp-map');
var isArray = require('amp-is-array');
var slice = Array.prototype.slice;
var identity = function (val) { return val; };


module.exports = function toArray(obj) {
    if (!obj) return [];
    if (isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return map(obj, identity);
    return values(obj);
};
