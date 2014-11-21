var has = require('../has');
var contains = require('../contains');
var indexOf = require('../index-of');
var isObject = require('../is-object');
var nativeKeys = Object.keys;
var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];


module.exports = function keys(obj) {
    if (!isObject(obj)) return [];
    if (nativeKeys) {
        return nativeKeys(obj);
    }
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // IE < 9
    if (hasEnumBug) {
      var nonEnumIdx = nonEnumerableProps.length;
      while (nonEnumIdx--) {
        var prop = nonEnumerableProps[nonEnumIdx];
        if (has(obj, prop) && indexOf(keys, prop) === -1) keys.push(prop);
      }
    }
    return keys;
};
