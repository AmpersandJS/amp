var isString = require('amp-is-string');
var whitespaceRE = /\s+/;


module.exports = function hasClass(el, cls) {
    if (!cls) return false;
    if (el.classList) return el.classList.contains(cls);
    var clsName = isString(el) ? el : el.className;
    var items = clsName.split(whitespaceRE);
    for (var i = 0, l = items.length; i < l; i++) {
        if (items[i] === cls) return true;
    }
    return false;
};
