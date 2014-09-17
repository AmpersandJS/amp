var isString = require('../is-string');
var re1 = /([\W_\-]+\S?)/g;
var re2 = /[\W_]/g;


module.exports = function toCamelCase(string) {
    if (!isString(string)) return '';
    var replaced = string.replace(re1, function (match) {
        return match.replace(re2, '').toUpperCase();
    });
    return replaced.slice(0, 1).toLowerCase() + replaced.slice(1);
};
