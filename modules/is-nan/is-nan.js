var isNumber = require('amp-is-number');


module.exports = function isNaN(obj) {
    return isNumber(obj) && obj !== +obj;
};
