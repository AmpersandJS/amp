/*global console*/
var fsExtra = require('fs-extra');
var fs = require('fs');
var jade = require('jade');


module.exports = function (file, context, output) {
    jade.render(fs.readFileSync(file, 'utf8'), {
        globals: [context],
        pretty: true,
        filename: file
    }, function (err, html) {
        if (err) throw err;
        var filename = output || file;
        if (!filename.replace) {
            throw new Error('no replace');
        }
        filename = filename.replace('.jade', '.html');
        console.log('writing', filename);
        fsExtra.outputFileSync(filename, html);
    });
};
