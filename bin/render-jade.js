var fsExtra = require('fs-extra');
var fs = require('fs');
var jade = require('jade');
var path = require('path');


module.exports = function (file, context, output) {
    jade.render(fs.readFileSync(file, 'utf8'), {
        globals: [context],
        pretty: true,
        filename: file,
        //basedir: __dirname + '/../documentation'
    }, function (err, html) {
        if (err) throw err;
        var filename = output || file;
        if (!filename.replace) {
            throw "no replace"
        }
        filename = filename.replace('.jade', '.html');
        console.log('writing', filename);
        fsExtra.outputFileSync(filename, html);
    });
};
