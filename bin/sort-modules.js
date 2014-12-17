// sorts modules as listed in package.json
var pack = require('../modules.json');
var writeJSON = require('../lib/write-json');


for (var category in pack) {
    pack[category].sort(function (one, two) {
        one = one.name;
        two = two.name;
        return one.localeCompare(two);
    });
}

writeJSON(__dirname + '/../modules.json', pack);
