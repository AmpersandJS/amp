var objKeys = require('amp-keys');


module.exports = function invert(obj) {
    var result = {};
    var keys = objKeys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
};
