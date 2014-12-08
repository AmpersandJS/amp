/*
Browserify transform that turns `require('amp-*');`
into local, relative requires.
*/
var through = require('through2');
var REMOTE_RE = /require\(\'amp-/g;
var LOCAL_STR = 'require(\'../';


module.exports = function () {
    return through(function (buf, enc, next) {
        this.push(buf.toString('utf8').replace(REMOTE_RE, LOCAL_STR));
        next();
    });
};
