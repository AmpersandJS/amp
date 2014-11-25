// can converts all the `require` paths in the
// project from being local to being pointed
// at node_module names and vice versa. 

/*global process*/
var fs = require('fs');
var getPackages = require('../lib/get-packages');
var which = process.argv.slice(2)[0];


var map = {
    remoteRegEx: /require\(\'amp-/g,
    localRegEx: /require\(\'\.\.\//g,
    remoteString: 'require(\'amp-',
    localString: 'require(\'../'
};

getPackages().forEach(function (pack) {
    if (which === 'remote') {
        pack.code = pack.code.replace(map.localRegEx, map.remoteString);
        pack.test = pack.test.replace(map.localRegEx, map.remoteString);
    } else if (which === 'local') {
        pack.code = pack.code.replace(map.remoteRegEx, map.localString);
        pack.test = pack.test.replace(map.remoteRegEx, map.localString);
    }
    var path = pack.folder + '/' + pack.fileName;

    fs.writeFileSync(path, pack.code);
    fs.writeFileSync(pack.folder + '/test.js', pack.test);
});
