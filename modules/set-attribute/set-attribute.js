// check if el also has a boolean property corresponding
// to the attribute
function hasBoolProp(el, prop) {
    var val = el[prop];
    return prop in el && (val === true || val === false);
}

function _set(el, name, value) {
    if (value === true) {
        el.setAttribute(name, '');
        if (hasBoolProp(el, name)) {
            el[name] = false;
        }
        return el;
    }
    if (value === false) {
        el.removeAttribute(name);
        if (hasBoolProp(el, name)) {
            el[name] = false;
        }
        return el;
    }
    // if setting value also set corresponding property
    if (name === 'value') {
        el.setAttribute(name, value);
        el.value = value;
        return el;
    }
    // assume falsy values (other than 0) to be same as ''
    if (!value && value !== 0) {
        value = '';
    }
    el.setAttribute(name, value);
    return el;
}

module.exports = function setAttribute(el, name, value) {
    if (arguments.length === 3) {
        return _set(el, name, value);
    }

    if (typeof name === 'string' && typeof value === 'undefined') {
        return _set(el, name, true);
    }

    for (var item in name) {
        _set(el, item, name[item]);
    }

    return el;
};
