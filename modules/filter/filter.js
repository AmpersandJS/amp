var iteratee = require('../iteratee');
var each = require('../each');


module.exports = function filter(obj, func, context) {
    var results = [];
    if (obj == null) return results;
    func = iteratee(func, context);
    each(obj, function(value, index, list) {
        if (func(value, index, list)) results.push(value);
    });
    return results;
};
