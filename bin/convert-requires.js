var fs = require('fs');
var getPackages = require('../lib/get-packages');
var which = process.argv.slice(2)[0];


var map = {
    remoteRegEx: /require\(\'amp-/g,
    localRegEx: /require\(\'..\//g,
    remoteString: 'require(\'amp-',
    localString: 'require(\'../'
};

getPackages().forEach(function (pack) {
    var toRemote = which === 'remote';
    if (which === 'remote') {
        pack.code = pack.code.replace(map.localRegEx, map.remoteString);
    } else if (which === 'local') {
        pack.code = pack.code.replace(map.removeRegEx, map.localString);
    }
    console.log(pack.code);
});
