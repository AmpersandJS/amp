var iteratee = require('../iteratee');
var objKeys = require('../keys');


module.exports = function some(obj, func, context) {
    if (obj == null) return false;
    var keys = obj.length !== +obj.length && objKeys(obj);
    var length = (keys || obj).length;
    var index = 0;
    var currentKey;
    
    func = iteratee(func, context);
    for (; index < length; index++) {
        currentKey = keys ? keys[index] : index;
        if (func(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
};
