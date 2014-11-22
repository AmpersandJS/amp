/*global window, global*/
var theGlobal = (typeof window !== 'undefined') ? window : global;
theGlobal.__ampIdCounter = 0;


module.exports = function uniqueId(prefix) {
    var id = ++theGlobal.__ampIdCounter + '';
    return prefix ? prefix + id : id;
};
