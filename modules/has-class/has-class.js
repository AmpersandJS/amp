var isString = require('../is-string');


module.exports = function hasClass(el, cls) {
    var clsName = isString(el) ? el : el.className;
    return (' ' + clsName + ' ').indexOf(' ' + cls + ' ') !== -1;
};
