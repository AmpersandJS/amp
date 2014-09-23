var util = require('util');


module.exports = function (packages) {
    var map = {};
    var tree;

    function buildMap(pack) {
        map[pack.bareName] = {
            dependencies: pack.dependencies,
            devDependencies: pack.devDependencies
        };
    };

    // extract all package data based on requries
    packages.forEach(buildMap);

    function getDetail(depString) {
        var deps = Array.prototype.slice.call(map[depString].dependencies);
        return {
            name: depString,
            deps: (deps.length) ? deps.map(getDetail) : deps
        };
    }

    tree = packages.map(function (pack) {
        return pack.bareName;
    }).map(getDetail);

    return tree;
};
