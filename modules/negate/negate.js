module.exports = function negate(predicate) {
    return function() {
        return !predicate.apply(this, arguments);
    };
};
