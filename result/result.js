var isFunction = require('../is-function');


module.exports = function result(object, property, defaultValue) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
        return defaultValue;
    }
    return isFunction(value) ? object[property]() : value;
};
