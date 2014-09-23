var packages = require('../lib/get-packages')();
var map = {};
var re = /require\(\'(amp-|\.\.\/)([a-z\-]+)\'/g;

function buildMap(pack) {
    map[pack.bareName] = {
        dependencies: (pack.code.match(re) || []).map(cleanMatch),
        devDependencies: (pack.test.match(re) || []).map(cleanMatch)
    }
};

// cleans off string because i'm bad at capturing groups
// in regexes apparently
function cleanMatch(str) {
    return str
        .replace('require(\'amp-', '')
        .replace('require(\'../', '')
        .replace('\'', '');
}

// extract all package data based on requries
packages.forEach(buildMap);

function getDetail(depString) {
    var deps = Array.prototype.slice.call(map[depString].dependencies);
    console.log('called with', depString);
    return {
        name: depString,
        deps: (deps.length) ? deps.map(getDetail) : deps
    };
}

var tree = packages.map(function (pack) {
    return pack.bareName;
}).map(getDetail);

var util = require('util');

console.log(util.inspect(tree, {depth: null, colors: true}));

//console.log(packages);
