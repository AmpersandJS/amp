var iteratee = require('amp-iteratee');


var someUtil = function (array, fn, context) {
    var iteratee = createIteratee(fn, context, 3);
    var result = [];

    for (var i = 0, l = array.length; i < l; i++) {
        result[i] = iteratee(array[i], i, array);
    } 
    return result;
};
