var hasClass = require('../has-class');
var trim = require('../trim');
var slice = Array.prototype.slice;
var support = !!document.documentElement.classList;
var cleanup = /\s{2,}/g;


module.exports = function addClass(el, cls) {
    // optimize for best, most common case
    if (arguments.length === 2 && support && cls) {
        el.classList.add(cls);
        return el;
    }

    cls = slice.call(arguments, 1);
    var toAdd = [];
    var i = 0;
    var l = cls.length;
    var item;
    var clsName = el.className;
    // see if we have anything to add
    for (; i < l; i++) {
        item = cls[i];
        if (item && !hasClass(clsName, item)) {
            toAdd.push(item);
        }
    }
    if (toAdd.length) {
        el.className = trim((clsName + ' ' + toAdd.join(' ')).replace(cleanup, ' '));
    }
    return el;
};
