// re-writes dependencies in package.json of each module
// based on actual dependencies used.
var fs = require('fs');
var modules = require('../lib/get-packages')();
var fixpack = require('fixpack');
var mainPack = require('../package.json');


modules.forEach(function (mod) {
    var result = {};
    var pack = mod.pack;

    mod.dependencies.forEach(function (dep) {
        result['amp-' + dep] = '^1.0.0';
    });

    // maintain custom-set versions if they already exist
    for (var item in result) {
        if (pack.dependencies && pack.dependencies[item]) {
            result[item] = pack.dependencies[item];
        }
    }
    
    if (Object.keys(result).length) {
        pack.dependencies = result;
    } else {
        delete pack.dependencies;
    }

    // do the same for dev deps
    result = {};

    mod.devDependencies.forEach(function (dep) {
        result['amp-' + dep] = '^1.0.0';
    });

    // maintain custom-set versions if they already exist
    for (item in result) {
        if (pack.devDependencies && pack.devDependencies[item]) {
            result[item] = pack.devDependencies[item];
        }
    }
    
    pack.devDependencies = result;

    pack.name = mod.name;
    pack.main = mod.fileName;
    pack.description = mod.bareName + ' function part of http://amp.ampersandjs.com.';
    pack.homepage = mod.docUrl;
    pack.version = pack.version || '1.0.0';
    pack.bugs = 'https://github.com/ampersandjs/amp/issues';
    pack.keywords = [
        'amp', 
        'util',
        mod.category
    ];
    
    if (!pack.amp) {
        pack.amp = {
            size: {}
        };
    }
    pack.amp.internal = mod.internal;

    pack.author = 'Henrik Joreteg <henrik@andyet.net>';
    pack.license = 'MIT';
    pack.scripts = {
        test: 'node test.js'
    };

    pack.repository = {
        type: 'git',
        url: 'git://github.com/ampersandjs/amp'
    };

    if (!pack.devDependencies) {
        pack.devDependencies = {};
    }
    
    pack.devDependencies.tape = mainPack.dependencies.tape;

    if (mod.requiresDom) {
        if (!pack.scripts) {
            pack.scripts = {};
        }
        pack.scripts.test = 'browserify test.js | tape-run | tap-spec';
        pack.devDependencies.browserify = mainPack.dependencies.browserify;
        pack.devDependencies['tape-run'] = mainPack.dependencies['tape-run'];
        pack.devDependencies['tap-spec'] = mainPack.dependencies['tap-spec'];
    }

    fs.writeFileSync(mod.folder + '/package.json', JSON.stringify(pack, null, 2), 'utf8');

    fixpack(mod.folder + '/package.json');
}); 

