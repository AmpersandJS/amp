// Generates scaffolding with folders and files
// for packages listed in package.json.
// also re-writes a few things for consistency.

var fs = require('fs');
var packages = require('../lib/get-names')();
var getTestString = require('../lib/get-test');
var toCamelCase = require('../lib/to-camel-case');


packages.forEach(function (method) {
    var dir = __dirname + '/../modules/' + method;
    var ampName = 'amp-' + method;
    var camelCased = toCamelCase(method);
    var exampleFile = dir + '/example.js';
    var sigFile = dir + '/sig.js';
    var docFiles = [
        dir + '/doc.md',
        exampleFile,
        sigFile
    ];
    var testFile = dir + '/test.js';
    var packFile = dir + '/package.json';
    var licenseFile = dir + '/LICENSE.md';
    var licenseSource = dir + '/../../LICENSE.md';
    var readmeFile =  dir + '/README.md';
    var readmeBuff = [];

    readmeBuff.push('# amp-' + method);
    readmeBuff.push('');
    readmeBuff.push('See [the documentation](http://amp.ampersandjs.com#amp-' + method + ') for more info.');
    readmeBuff.push('');
    readmeBuff.push('Part of the [amp project](http://amp.ampersandjs.com#amp-' + method + '), initially created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg).');

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.writeFileSync(dir + '/' + method + '.js', 'module.exports = function ' + camelCased +'() {};');
    }

    if (!fs.existsSync(testFile)) {
        fs.writeFileSync(testFile, getTestString(camelCased, ampName, method));
    } else {
        // re-write with correct test name
        var file = fs.readFileSync(testFile, 'utf8');

        var replaced = file.replace(/test\(\'(\S+)/m, function () {
            return 'test(\'' + ampName + '\',';
        });

        fs.writeFileSync(testFile, replaced);
    }
    if (!fs.existsSync(licenseFile)) {
        fs.createReadStream(licenseSource).pipe(fs.createWriteStream(licenseFile));
    }

    // create empty doc.md if it doesn't exist
    docFiles.forEach(function (docFile) {
        if (!fs.existsSync(docFile)) {
            fs.writeFileSync(docFile, '');
        }
    });

    // create README.md
    fs.writeFileSync(readmeFile, readmeBuff.join('\n'));

    // re-write first line of example.js
    var example = fs.readFileSync(exampleFile, 'utf8').split('\n').slice(1);
    example.unshift('var ' + camelCased + ' = require(\'' + ampName + '\');');
    fs.writeFileSync(exampleFile, example.join('\n'));

    // re-write sigfile if empty
    var sig = fs.readFileSync(sigFile, 'utf8');
    if (sig === '') {
        fs.writeFileSync(sigFile, camelCased + '();', 'utf8');
    }

    // create empty package.json if doesn't exist
    if (!fs.existsSync(packFile)) {
        fs.writeFileSync(packFile, '{}', 'utf8');
    }
});

