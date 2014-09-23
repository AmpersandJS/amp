var has = require('../has');
var isObject = require('../is-object');
var nativeKeys = Object.prototype.keys;


module.exports = function keys(obj) {
    if (!isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    return keys;
};
