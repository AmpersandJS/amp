var hasClass = require('../has-class');
var isString = require('../is-string');
var slice = Array.prototype.slice;


module.exports = function addClass(el) {
    var cls = slice.call(arguments, 1);
    var toAdd = [];
    var i = 0;
    var l = cls.length;
    var item;
    // see if we have anything to add
    for (; i < l; i++) {
        item = cls[i];
        if (!item || !isString(item)) continue;
        if (!hasClass(el, item)) {
            toAdd.push(item);
        }
    }
    if (toAdd.length) {
        el.className += (' ' + toAdd.join(' '));
    }
    return el;
};
