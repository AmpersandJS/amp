var limitCalls = require('amp-limit-calls');


module.exports = function once(fn) {
    return limitCalls(fn, 1);
};
