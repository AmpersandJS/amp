var packs = require('../lib/get-packages')();
var tree = require('../lib/get-dependency-tree')(packs);
var Columnizer = require('columnizer');
var table = new Columnizer();

table.row('Name', 'Depth');

function getDepth(item) {
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

    checkDepth(item, depth);

    table.row(item.name, maxDepth);
}

tree.forEach(getDepth);

table.print(5);
