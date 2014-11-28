var isNumber = require('../is-number');


module.exports = function isNaN(obj) {
    return isNumber(obj) && obj !== +obj;
};
