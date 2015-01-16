var isFunction = require('amp-is-function');


module.exports = function result(object, property, defaultValue) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
        return isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    return isFunction(value) ? object[property]() : value;
};
