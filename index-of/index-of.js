var isObj = require('../is-object');
var arrayInd = Array.prototype.indexOf;

// for MSIE < 9
if (!arrayInd) {
    arrayInd = function (obj) {
        for (var i = 0; i < this.length; ++i) {
            if (this[i] === obj) return i;
        }
        return -1;
    };
}

module.exports = function indexOf(obj, val) {
    if (!isObj(obj)) return -1;
    return arrayInd.call(obj, val);
};
