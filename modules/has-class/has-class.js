var isString = require('../is-string');
var slice = Array.prototype.slice;


module.exports = function hasClass(el) {
    var cls = slice.call(arguments, 1);
    var clsName = isString(el) ? el : el.className;
    clsName = ' ' + clsName +  ' ';
    for (var i = 0, l = cls.length; i < l; i++) {
        if (clsName.indexOf(' ' + cls[i] + ' ') < 0) {
            return false;
        }
    }
    return true;
};
