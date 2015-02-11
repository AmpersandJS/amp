var iteratee = require('amp-iteratee');
var some = require('amp-some');


module.exports = function find(obj, func, context) {
    var result;
    if (obj == null) return result;
    func = iteratee(func, context);
    some(obj, function (value, index, list) {
        if (func(value, index, list)) {
            result = value;
            return true;
        }
    });
    return result;
};
