module.exports = function (packages) {
    var map = {};
    var tree;

    var buildMap = function(pack) {
        map[pack.bareName] = {
            dependencies: pack.dependencies,
            devDependencies: pack.devDependencies,
            data: pack
        };
    };

    packages.forEach(buildMap);

    function getDetail(depString) {
        var deps = [].slice.call(map[depString].dependencies);
        return {
            name: depString,
            deps: (deps.length) ? deps.map(getDetail) : deps,
            data: map[depString].data
        };
    }

    tree = packages.map(function (pack) {
        return pack.bareName;
    }).map(getDetail);

    return tree;
};
