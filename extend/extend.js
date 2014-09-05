module.exports = function(obj) {
    if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
            obj[prop] = source[prop];
        }
    }
    return obj;
};
