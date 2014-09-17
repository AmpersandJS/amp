var isNumber = require('../is-number');


module.exports = function isNaN() {
    return isNumber(obj) && obj !== +obj;
};
