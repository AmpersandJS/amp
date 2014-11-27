var trim = require('../trim');
var whiteSpace = /\s+/;


module.exports = function getClasses(el) {
    var classes = trim(el.className);
    if (!classes) {
        return [];
    }
    return classes.split(whiteSpace);
};
