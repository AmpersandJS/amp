var trim = require('../trim');
var slice = Array.prototype.slice;
var support = !!document.documentElement.classList;
var cleanup = /\s{2,}/g;


module.exports = function removeClass(el, cls) {
    // optimize for best, most common case
    if (arguments.length === 2 && support && cls) {
        el.classList.remove(cls);
        return el;
    }
    cls = slice.call(arguments, 1);
    // store two copies
    var clsName = ' ' + el.className + ' ';
    var result = clsName;
    var current;
    var start;
    for (var i = 0, l = cls.length; i < l; i++) {
        current = cls[i];
        start = result.indexOf(' ' + current + ' ');
        if (start !== -1) {
            start += 1;
            result = result.slice(0, start) + result.slice(start + current.length);
        }
    }
    // only write if modified
    if (clsName !== result) {
        el.className = trim(result.replace(cleanup, ' '));
    }
    return el;
};
