var setAttribute = require('amp-set-attribute');
var isString = require('amp-is-string');
var isArray = require('amp-is-array');


module.exports = function createElement(name, text, attrs, children) {
    if (!document) return;
    if (!isString(text)) {
        children = attrs;
        attrs = text;
        text = null;
        // name, attrs, children
        if (isArray(attrs)) {
            children = attrs;
            attrs = null;
        }
    } else {
        // name, text, children
        if (isArray(attrs)) {
            children = attrs;
            attrs = null;
        }
    }
    var el = document.createElement(name);
    if (attrs) {
        el = setAttribute(el, attrs);
    }
    if (text) {
        el.innerText = text;
    }
    if (children) {
        for (var i = 0, l = children.length; i < l; i++) {
            el.appendChild(children[i]);
        }
    }
    return el;
};
