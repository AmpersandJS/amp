var slice = Array.prototype.slice;


module.exports = function first(arr, n, guard) {
    if (arr == null) return void 0;
    if (n == null || guard) return arr[0];
    if (n < 0) return [];
    return slice.call(arr, 0, n);
};
