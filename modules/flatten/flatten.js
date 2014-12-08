var internalFlatten = require('amp-internal-flatten');


module.exports = function flatten(array, shallow) {
    return internalFlatten(array, shallow, false);
};
