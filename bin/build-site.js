var fs = require('fs');
var packages = require('../lib/get-packages')();

// build our readmes first
require('./build-readmes');

var buff = [];

buff.push('# amp');
buff.push('');
buff.push('[![browser support](https://ci.testling.com/henrikjoreteg/amp.png)](https://ci.testling.com/henrikjoreteg/amp)');
buff.push('');

packages.forEach(function (pack) {
    buff.push('## ' + pack.name)
    buff.push('');
    buff.push(pack.doc);
    buff.push('### the code');
    buff.push('');
    buff.push('```javascript\n' + pack.code + '```');
    buff.push('');
    buff.push('### Dependency tree');
    buff.push('');
    buff.push('```json');
    buff.push(JSON.stringify(pack.dependencyTree, null, 4));
    buff.push('```');
    buff.push('');
    buff.push('### Credits');
    buff.push('');
    buff.push('The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.');
});

fs.writeFileSync(__dirname + '/../docs.md', buff.join('\n'));
console.log('\n\nwrote file: docs.md');
