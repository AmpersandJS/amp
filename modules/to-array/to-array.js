var values = require('amp-values');
var iteratee = require('amp-iteratee');
var map = require('amp-map');
var isArray = require('amp-is-array');
var slice = Array.prototype.slice;


module.exports = function toArray(obj) {
    if (!obj) return [];
    if (isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return map(obj, iteratee);
    return values(obj);
};
