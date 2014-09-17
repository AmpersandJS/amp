var isObj = require('../is-object');
var arrayInd = Array.prototype.indexOf;


module.exports = function indexOf(obj, val) {
    if (!isObj(obj)) return -1;
    return arrayInd.call(obj, val);
};
