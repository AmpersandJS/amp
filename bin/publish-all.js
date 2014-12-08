/*global console*/
var npm = require('npm');
var modules = require('../lib/get-packages')();

npm.load({}, function () {
    modules.forEach(function (module) {    
        npm.commands.publish([module.folder], function (err) {
            if (err) {
                console.log('did not publish ' + module.name);
                //console.log(err.toString());
            }
        });
    });
});
