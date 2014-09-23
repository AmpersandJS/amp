var before = require('../before');
var slice = Array.prototype.slice;


module.exports = function once(fn) {
    return before(2, fn);
};
