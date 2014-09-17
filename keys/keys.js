var has = require('../has');
var isObject = require('../is-object');
var contains = require('../contains');
var nativeKeys = Object.prototype.keys;


// Keys in IE that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
var nonEnumerableProps = [
    'constructor',
    'valueOf',
    'isPrototypeOf',
    'toString',
    'propertyIsEnumerable',
    'hasOwnProperty',
    'toLocaleString'
];


module.exports = function keys(obj) {
    if (!isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);

    // fallback for IE
    if (hasEnumBug) {
        var nonEnumIdx = nonEnumerableProps.length;
        while (nonEnumIdx--) {
            var prop = nonEnumerableProps[nonEnumIdx];
            if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
        }
    }
    return keys;
};
