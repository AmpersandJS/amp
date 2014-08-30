// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;


module.exports = function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
};
