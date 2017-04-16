var isString = require('amp-is-string');

module.exports = function toSnakeCase(string, screaming) {
	if (!isString(string)) return '';
	string = string.replace(/_/g, ' ').match(/\w+/g) || [];
	var lowerCaser = function(part) {
		return screaming ? part.toUpperCase() : part.toLowerCase();
	};
	return string.map(lowerCaser).join('_');
};