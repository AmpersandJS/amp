var fs = require('fs');
var getPackages = require('../lib/get-packages');


getPackages().forEach(function (pack) {
    var target = pack.folder + '/README.md';
    var buffer = [];

    buffer.push('## ' + pack.name)
    buffer.push('');
    buffer.push(pack.doc);
    buffer.push('### the code');
    buffer.push('');
    buffer.push('```javascript\n' + pack.code + '```');
    buffer.push('');
    buffer.push('### Browser support');
    buffer.push('');
    buffer.push('[![browser support](https://ci.testling.com/henrikjoreteg/' + pack.name + '.png)](https://ci.testling.com/ampersandjs/' + pack.name + ')');
    buffer.push('');
    buffer.push('### Credits');
    buffer.push('');
    buffer.push('The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.');

    console.log('writing: ' + target);
    fs.writeFileSync(target, buffer.join('\n'));
});

