var fs = require('fs');
var getPackages = require('../lib/get-packages');


getPackages().forEach(function (pack) {
    var target = pack.folder + '/README.md';
    var buff = [];

    buff.push('# ' + pack.name);
    buff.push('');
    buff.push('See [the documentation](http://amp-project.com#' + pack.name + ') for more info.');
    buff.push('');
    buff.push('Part of the [amp project](http://amp-project.com#' + pack.name + '), initially created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg).');

    fs.writeFileSync(target, buff.join('\n'));
});

