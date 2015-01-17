var extend = require('amp-extend');

module.exports = function merge() {
    var args = [].slice.call(arguments);
    args.unshift({});
    return extend.apply(this, args);
};