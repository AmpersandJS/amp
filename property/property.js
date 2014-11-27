module.exports = function property(key) {
    return function(obj) {
        return obj[key];
    };
};
