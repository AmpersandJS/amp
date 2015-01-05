var isString = require('amp-is-string');
var capitalize = require('amp-capitalize');
var re1 = /([\W_\-]+\S?)/g;
var re2 = /[\W_]/g;


module.exports = function toCamelCase(string, capitalizeFirst) {
    if (!isString(string)) return '';
    var result = string.replace(re1, function (match) {
        return match.replace(re2, '').toUpperCase();
    });
    return capitalize(result, !!capitalizeFirst);
};
