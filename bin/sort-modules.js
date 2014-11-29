// sorts modules as listed in package.json
var pack = require('../modules.json');
var fs = require('fs');


for (var category in pack) {
    pack[category].sort();
}

fs.writeFileSync(__dirname + '/../modules.json', JSON.stringify(pack, null, 2), 'utf8');
