// Tries to make sure all required documentation
// files exist and are filled out as a validation
// and the precommit-hook.

/*global process, console*/
var fs = require('fs');
var path = require('path');
var packages = require('../lib/get-packages')();
var errors = [];

packages.forEach(function (pack) {
    var folder = __dirname + '/../modules/' + pack.bareName;
    var sigFilePath = folder + '/sig.js';
    var docFilePath = folder + '/doc.md';
    var examplePath = folder + '/example.js';
    var licensePath = folder + '/LICENSE.md';
    var sigFile = fs.readFileSync(sigFilePath, 'utf8');
    var docFile = fs.readFileSync(docFilePath, 'utf8');
    var example = fs.readFileSync(examplePath, 'utf8');
    var licenseExists = fs.existsSync(licensePath);
    var licenseFile;
    if (licenseExists) {
        licenseFile = fs.readFileSync(licensePath, 'utf8');
    }

    if (sigFile === '') {
        errors.push(pack.name + ' has an empty sig.js file');
    }

    if (sigFile.indexOf('()') !== -1) {
        errors.push(path.normalize(sigFilePath) + ' doesn\'t contain args');
    }

    if (docFile === '') {
        errors.push(path.normalize(docFilePath) + ' is empty');
    }

    if (example.split('\n').length < 3) {
        errors.push(path.normalize(examplePath) + ' is empty');
    }

    if (!licenseExists || licenseFile  === '') {
        errors.push(path.normalize(licensePath) + ' is missing or empty');
    }

});

console.log(errors.join('\n'));
console.log('\n' + errors.length + ' errors' + '\n');

process.exit(errors.length ? 1 : 0);
