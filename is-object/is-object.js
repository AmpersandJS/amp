module.exports = function isObject(obj) {
    var type = typeof obj;
    return !!obj && (type === 'function' || type === 'object');
};
