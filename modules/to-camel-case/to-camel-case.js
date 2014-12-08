var isString = require('amp-is-string');
var re1 = /([\W_\-]+\S?)/g;
var re2 = /[\W_]/g;


module.exports = function toCamelCase(string, capitalizeFirst) {
    if (!isString(string)) return '';
    var replaced = string.replace(re1, function (match) {
        return match.replace(re2, '').toUpperCase();
    });
    var first = replaced.slice(0, 1)[capitalizeFirst ? 'toUpperCase' : 'toLowerCase']();
    return first + replaced.slice(1);
};
