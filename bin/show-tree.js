var util = require('util');
var packs = require('../lib/get-packages')();
var tree = require('../lib/get-dependency-tree')(packs);


console.log(util.inspect(tree, {colors: true, depth: null}));

function getDepth(item) {
    var results = [];
    var maxDepth = 0;
    var depth = 0;

    function checkDepth(item, depth) {
        var hasChildren = !!item.deps.length;
        if (hasChildren) {
            depth++;
            if (depth > maxDepth) maxDepth = depth;
            item.deps.forEach(function (subItem) {
                checkDepth(subItem, depth);
            });
        }
    }

    checkDepth(item, depth)

    console.log(item.name + ' depth: ' + maxDepth);
}

tree.forEach(getDepth);
