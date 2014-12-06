/*global console*/
var npm = require('npm');
var modules = require('../lib/get-packages')();

npm.load({}, function () {
    var picks = [
        'amp-has-class',
        'amp-is-string',
        'amp-is-array',
        'amp-trim'
    ];

    modules = modules.filter(function (module) {
        return picks.indexOf(module.name) !== -1;
    });

    console.log(modules.length);


    modules.forEach(function (module) {
        console.log(module.name);
        console.log(module.pack.version);
    });

    modules.forEach(function (module) {    
        npm.commands.publish([module.folder], function (err) {
            if (err) {
                console.log('failed to publish ' + module.name);
                console.log(err.toString());
            }
        });
    });
});




