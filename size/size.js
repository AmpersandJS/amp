module.exports = function size(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : Object.keys(obj).length;
};
