module.exports = function property(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    };
};
