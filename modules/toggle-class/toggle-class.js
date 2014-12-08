var isUndefined = require('amp-is-undefined');
var hasClass = require('amp-has-class');
var addClass = require('amp-add-class');
var removeClass = require('amp-remove-class');


var actions = {
    add: addClass,
    remove: removeClass
};

module.exports = function toggleClass(el, cls, condition) {
    var action;
    if (!isUndefined(condition)) {
        action = condition ? 'add' : 'remove';
    } else {
        action = hasClass(el, cls) ? 'remove' : 'add';
    }
    return actions[action](el, cls);
};
