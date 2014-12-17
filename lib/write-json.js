// simple helper for writing json files with indenting and proper EOL
var fs = require('fs');
var os = require('os');


module.exports = function (path, object) {
    return fs.writeFileSync(path, JSON.stringify(object, null, 2) + os.EOL, 'utf8');
};

