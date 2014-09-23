// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var theGlobal = (typeof window !== 'undefined') ? window : global;
theGlobal.__ampIdCounter = 0;


module.exports = function uniqueId(prefix) {
    var id = ++theGlobal.__ampIdCounter + '';
    return prefix ? prefix + id : id;
};
