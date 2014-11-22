var oKeys = require('../keys');


module.exports = function values(obj) {
    var keys = oKeys(obj);
    var length = keys.length;
    var vals = Array(length);
    for (var i = 0; i < length; i++) {
        vals[i] = obj[keys[i]];
    }
    return vals;
};
