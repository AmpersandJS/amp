var isString = require('amp-is-string');
var re1 = /(\w+)/g;

module.exports = function toKebabCase(string) {
    var parts;
    if (!isString(string)) return '';
    parts = [];
    string.replace(/_/g, ' ').replace(re1, function(match, p1) {
        parts.push(p1.toLowerCase());
    });
    return parts.join('-');

};
