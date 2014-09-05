var fs = require('fs');
var rimraf = require('rimraf');


var methods = [
    'uniqueId',
    'extend',
    'escape',
    'each',
    'indexOf',
    'is-object',
    'is-undefined',
    'is-null',
    'is-equal',
    'is-arguments',
    'is-empty',
    'is-string',
    'is-array',
    'is-function',
    'is-date',
    'is-nan',
    'is-number',
    'is-regexp',
    'contains',
    'clone',
    'has',
    'result',
    'values',
    'defaults'
];


methods.forEach(function (method) {
    var dir = __dirname + '/' + method;
    var pack = require('./pack_template.json');

    //rimraf.sync(dir);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.writeFileSync(dir + '/' + method + '.js', 'module.exports = function ' +  method +'() {}');
    }

    if (!fs.existsSync(dir + '/test.js')) {
        fs.writeFileSync(dir + '/test.js', 'var test = require(\'tape\');\nvar pack = require(\'./package.json\');\nvar ' + method + ' = require(\'./\' + pack.main);\n\n\n');
    }

    pack.name = 'amp-' + method;
    pack.main = method + '.js';
    pack.description = 'Standalone version of ' + method + ' util function (sans `chain()` support).';


    fs.writeFileSync(dir + '/package.json', JSON.stringify(pack, null, 2));

});

