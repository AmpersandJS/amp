var slice = Array.prototype.slice;


module.exports = function last(arr, n, guard) {
    if (arr == null) return void 0;
    if (n == null || guard) return arr[arr.length - 1];
    return slice.call(arr, Math.max(0, arr.length - n));
};
