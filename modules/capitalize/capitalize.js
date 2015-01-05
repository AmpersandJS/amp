var isString = require('amp-is-string');


module.exports = function capitalize(str, uppercase) {
    if (!isString(str)) return '';
    return str.charAt(0)[uppercase !== false ? 'toUpperCase' : 'toLowerCase']() + str.slice(1);
};
