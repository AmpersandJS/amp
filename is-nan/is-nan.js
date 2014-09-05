var isNumber = require('amp-is-number');


module.exports = function isNaN() {
    return isNumber(obj) && obj !== +obj;
};
