var values = require('../values');
var indexOf = require('../index-of');


module.exports = function contains(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = values(obj);
    return indexOf(obj, target) >= 0;
};
