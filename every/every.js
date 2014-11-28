var objKeys = require('../keys');
var iteratee = require('../iteratee');


module.exports = function every(obj, func, context) {
    if (obj == null) return true;
    var keys = obj.length !== +obj.length && objKeys(obj);
    var length = (keys || obj).length;
    var index, currentKey;
    
    func = iteratee(func, context);
    
    for (index = 0; index < length; index++) {
        currentKey = keys ? keys[index] : index;
        if (!func(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
};
