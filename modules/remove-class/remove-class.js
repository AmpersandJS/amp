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
    var classes = slice.call(arguments, 1);
    // store two copies
    var clsName = el.className;
    var result = clsName;
    for (var i = 0, l = classes.length; i < l; i++) {
        result = result.replace(classes[i], '');
    }
    // only write if modified
    if (clsName !== result) {
        el.className = trim(result.replace(cleanup, ' '));
    }
    return el;
};
