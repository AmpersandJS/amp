var indexOf = require('../index-of');
var isString = require('../is-string');
var slice = Array.prototype.slice;
var whiteSpace = /\s+/;


module.exports = function removeClass(el) {
    var toRemove = slice.call(arguments, 1);
    var classes = el.className.split(whiteSpace);
    var removed = false;
    var i = 0;
    var l = toRemove.length;
    var item, index;

    // see if we have anything to 
    for (; i < l; i++) {
        item = toRemove[i];
        if (!isString(item) || !item) continue;
        
        index = indexOf(classes, item);
        if (index !== -1) {
            classes.splice(index, 1);
            removed = true;
        }
    }
    if (removed) {
        el.className = classes.join(' ');
    }
    return el;
};
