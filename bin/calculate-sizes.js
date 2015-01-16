var prettyBytes = require('pretty-bytes');
var browserify = require('browserify');
var uglify = require('uglifyjs');
var gzip = require('gzip-size');
var async = require('async');

var writeJSON = require('../lib/write-json');
var modules = require('../lib/get-packages')();
var baseSize;

function min(str) {
    return gzip.sync(uglify.minify(str, {fromString: true}).code);
}

var b = browserify();
b.add(__dirname + '/../lib/stub-file');
b.bundle(function (err, js) {
    var code = js.toString();
    baseSize = {
        original: code.length,
        minified: min(code)
    };

    async.forEach(modules, function (module, cb) {
        var b = browserify();
        b.add(module.folder);
        b.bundle(function (err, js) {
            var code = js.toString();
            var pack = module.pack;
            if (!pack.amp) {
                pack.amp = {};
            }
            pack.amp.size = {
                original: prettyBytes(code.length - baseSize.original),
                minified: prettyBytes(min(code) - baseSize.minified)
            };
            writeJSON(module.folder + '/package.json', pack);
            cb();
        });
    });
});




