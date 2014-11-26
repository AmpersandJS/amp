// reads and returns metadata for all the modules
// useful for built tools, etc.
/* jshint loopfunc:true */
var fs = require('fs');
var path = require('path');
var marked = require('marked');
var packages = require('../package.json').packages;
var toCamelCase = require('./to-camel-case');
var getDependencyTree = require('./get-dependency-tree');
var parseInterDependencies = require('./parse-dependencies');

function read(folder, file) {
    var filePath = folder + '/' + file;

    if (!fs.existsSync(filePath)) {
        return '';
    }
    return fs.readFileSync(filePath, 'utf8');
}

module.exports = function () {
    var dir = __dirname + '/..';

    var packs = [];

    for (var category in packages) {
        packages[category].forEach(function (file) {
            var folder = path.resolve(dir + '/' + file);
            var doc = read(folder, 'doc.md');
            var result = {
                bareName: file,
                name: 'amp-' + file,
                fileName: file + '.js',
                camelCaseName: toCamelCase(file),
                code: read(folder, file + '.js'),
                pack: JSON.parse(read(folder, 'package.json')),
                readme: read(folder, 'README.md'),
                test: read(folder, 'test.js'),
                folder: folder,
                doc: doc,
                docHtml: marked(doc),
                methodSignature: read(folder, 'sig.js'),
                exampleCode: read(folder, 'example.js'),
                category: category
            };

            result.dependencies = parseInterDependencies(result.code);
            result.devDependencies = parseInterDependencies(result.test);

            packs.push(result);
        });
    }

    // we have to build the tree as a whole
    var tree = getDependencyTree(packs);

    // then we zip it back in (we know the order is the same)
    packs.forEach(function (pack, index) {
        pack.dependencyTree = tree[index];
    });

    packs.sort(function (p1, p2) {
        var name1 = p1.name;
        var name2 = p2.name;
        return name1.localeCompare(name2);
    });

    return packs;
};
