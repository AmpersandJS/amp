module.exports = function runAfter(fn, times) {
    return function () {
        if (--times < 1) {
            return fn.apply(this, arguments);
        }
    };
};
