// sorts modules as listed in package.json
var pack = require('../package.json');
var fs = require('fs');


for (var category in pack.packages) {
    pack.packages[category].sort();
}

fs.writeFileSync(__dirname + '/../package.json', JSON.stringify(pack, null, 2), 'utf8');
