var before = require('../before');


module.exports = function once(fn) {
    return before(2, fn);
};
