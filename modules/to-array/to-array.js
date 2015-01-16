var values = require('amp-values');
var iteratee = require('amp-iteratee');
var map = require('amp-map');
var isArray = require('amp-is-array');

module.exports = function toArray(obj) {
    if (!obj) return [];
    if (isArray(obj)) return Array.prototype.slice.call(obj);
    if (obj.length === +obj.length) return map(obj, iteratee);
    return values(obj);
};
