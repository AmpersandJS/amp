// sorts modules as listed in package.json
var pack = require('../modules.json');
var fs = require('fs');


for (var category in pack) {
    pack[category].sort(function (one, two) {
        one = one.name;
        two = two.name;
        return one.localeCompare(two);
    });
}

fs.writeFileSync(__dirname + '/../modules.json', JSON.stringify(pack, null, 2), 'utf8');
