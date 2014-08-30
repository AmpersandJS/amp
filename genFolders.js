var fs = require('fs');
var rimraf = require('rimraf');


var methods = [
    'uniqueId',
    'extend',
    'escape',
    'each',
    'isObject',
    'isUndefined',
    'isNull',
    'isEqual',
    'isArguments',
    'isEmpty',
    'isString',
    'isArray',
    'isFunction',
    'isDate',
    'isNaN',
    'isNumber',
    'isRegExp',
    'contains',
    'clone',
    'has',
    'result',
    'keys',
    'bind',
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

    pack.name = '_' + method;
    pack.main = pack.name + '.js';
    pack.description = 'Standalone version of ' + method + ' util function (sans `chain()` support).';


    fs.writeFileSync(dir + '/package.json', JSON.stringify(pack, null, 2));

});

