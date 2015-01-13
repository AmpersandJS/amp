var isString = require('amp-is-string');
var isArray = require('amp-is-array');
var trim = require('amp-trim');
var slice = Array.prototype.slice;
var cleanup = /\s{2,}/g;
var ws = /\s+/;


module.exports = function removeClass(el, cls) {
    if (arguments.length === 2 && isString(cls)) {
        cls = trim(cls).split(ws);
    } else {
        cls = isArray(cls) ? cls : slice.call(arguments, 1);    
    }
    // optimize for best, most common case
    if (cls.length === 1 && el.classList) {
        if (cls[0]) el.classList.remove(cls[0]);
        return el;
    }
    // store two copies
    var clsName = ' ' + el.className + ' ';
    var result = clsName;
    var current;
    var start;
    for (var i = 0, l = cls.length; i < l; i++) {
        current = cls[i];
        start = current ? result.indexOf(' ' + current + ' ') : -1;
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
