var extend = require('amp-extend');

module.exports = function merge() {
    var args = [].slice.call(arguments).sort();
    args.unshift({});
    return extend.apply(this, args);
};