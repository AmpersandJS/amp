var values = require('values');


module.exports = function contains(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = values(obj);
    return _.indexOf(obj, target) >= 0;
};
