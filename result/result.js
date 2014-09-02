var isFunction = require('isfunction')


module.exports = function result(object, property) {
    if (object == null) return;
    var value = object[property];
    return isFunction(value) ? value.call(object) : value;
};
