var fs = require('fs');
var rimraf = require('rimraf');
var packages = require('../package.json').packages;
var getTestString = require('../lib/get-test');
var toCamelCase = require('../lib/to-camel-case');


packages.forEach(function (method) {
    var dir = __dirname + '/../' + method;
    var pack = require('../pack_template.json');
    var ampName = 'amp-' + method;
    var camelCased = toCamelCase(method);
    var docFile = dir + '/doc.md';
    var testFile = dir + '/test.js';

    // rimraf.sync(dir);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.writeFileSync(dir + '/' + method + '.js', 'module.exports = function ' + camelCased +'() {}');
    }

    if (!fs.existsSync(testFile)) {
        fs.writeFileSync(testFile, getTestString(camelCased, ampName));
    } else {
        // re-write with correct test name
        var file = fs.readFileSync(testFile, 'utf8');

        var replaced = file.replace(/test\(\'(\S+)/m, function (match) {
            return 'test(\'' + ampName + '\','
        });

        fs.writeFileSync(testFile, replaced);
    }

    // create empty doc.md if it doesn't exist
    if (!fs.existsSync(docFile)) {
        fs.writeFileSync(docFile, '');
    }

    pack.name = 'amp-' + method;
    pack.main = method + '.js';
    pack.description = 'Standalone module implementing the ' + method + ' util function.';

    fs.writeFileSync(dir + '/package.json', JSON.stringify(pack, null, 2));
});

