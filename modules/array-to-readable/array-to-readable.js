module.exports = function arrayToReadable(arr, opts) {
    if (!opts) {
        opts = {};
    }
    var length = arr.length;
    var conj = opts.conjunction || 'and';
    var oxford = opts.oxford !== false;
    switch(length) {
        case 1:
            return arr[0].toString();
        case 2:
            return arr.join(' ' + conj + ' ');
        default:
            return arr.slice(0, -1).join(', ') + (oxford ? ',' : '') + ' ' + conj + ' ' + arr.slice(-1);
    }
};
