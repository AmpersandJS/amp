var isString = require('amp-is-string');

module.exports = function toKebabCase(string) {
    var parts;
    if (!isString(string)) return '';
    parts = [];
    string.replace(/_/g, ' ').replace(/(\w+)/g, function(match, p1) {
        parts.push(p1.toLowerCase());
    });
    return parts.join('-');

};
