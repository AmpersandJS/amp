var isString = require('../is-string');


module.exports = function hasClass(el, cls) {
    if (!isString(cls)) return false;

    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return new RegExp('(^| )' + cls + '( |$)', 'gi').test(el.className);
    }
};
