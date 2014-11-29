// reads and returns metadata for all the modules
// useful for built tools, etc.
/* jshint loopfunc:true */
var fs = require('fs');
var path = require('path');
var marked = require('marked');
var packages = require('../modules.json');
var toCamelCase = require('../modules/to-camel-case');
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
    var dir = __dirname + '/../modules';
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
                category: category,
                homepage: 'http://amp.ampersandjs.com',
                requiresDom: category === 'dom'
            };

            result.internal = !!(result.pack.amp && result.pack.amp.internal);
            result.docUrl = result.homepage + '/#' + result.name;
            result.dependencies = parseInterDependencies(result.code) || [];
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

    // we have the tree form, now we build a flat, deduped list
    function getUniqueDeps(depTree) {
        var result = {};
        var readDeps = function (node) {
            if (node.dependencyTree) {
                node.dependencyTree.deps.forEach(function (item) {
                    result[item.name] = item.data;
                    readDeps(item.data);
                });
            }
        };
        readDeps(depTree);
        return result;
    }
    
    packs.forEach(function (pack) {
        pack.dependencyList = getUniqueDeps(pack);
    });

    return packs;
};
