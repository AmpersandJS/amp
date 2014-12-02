module.exports = function range(start, stop, step) {
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var output = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
        output[idx] = start;
    }

    return output;
};
