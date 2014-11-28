// return flat array of all package names in same
// order as listed in package.json
var packages = require('../modules.json');


module.exports = function () {
    var result = [];
    for (var category in packages) {
        result = result.concat(packages[category]);
    }
    return result;
};
