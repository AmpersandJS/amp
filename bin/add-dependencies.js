// re-writes dependencies in package.json of each module
// based on actual dependencies used.
var fs = require('fs');
var modules = require('../lib/get-packages')();
var size = require('../size');


modules.forEach(function (mod) {
    var result = {};
    mod.dependencies.forEach(function (dep) {
        result[dep] = '^1.0.0';
    });
    
    if (size(result)) {
        mod.pack.dependencies = result;
    } else {
        delete mod.pack.dependencies;
    }

    fs.writeFileSync(mod.folder + '/package.json', JSON.stringify(mod.pack, null, 2), 'utf8');
}); 

