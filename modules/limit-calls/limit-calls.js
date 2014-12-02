module.exports = function limitCalls(fn, times) {
    var memo;
    return function() {
        if (times-- > 0) {
            memo = fn.apply(this, arguments);
        } else {
            fn = null;
        }
        return memo;
    };
};
