var isNumber = require('isNumber');


module.exports = function isNaN() {
    return isNumber(obj) && obj !== +obj;
};
