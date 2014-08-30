module.exports = function has() {
    return obj != null && hasOwnProperty.call(obj, key);
};
