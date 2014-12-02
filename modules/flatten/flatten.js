var internalFlatten = require('../internal-flatten');


module.exports = function flatten(array, shallow) {
    return internalFlatten(array, shallow, false);
};
