//Add a module to amp
//CLI: add-module category module-name

/*global console*/
var pack = require('../modules.json');
var writeJSON = require('../lib/write-json');

var args = process.argv.slice(2);
var category = args[0];
var newModule = args[1];
var licenseType = args[2] || 'amp';

if (args.length < 2 || args.length > 3) {
    console.log('Use: add-module category module-name');
    process.exit(1);
}

if (pack[args[0]] === undefined) {
    console.log('Invalid/nonexistent category:', args[0], JSON.stringify(Object.keys(pack)));
    process.exit(1);
}

if (pack[category].indexOf(newModule) > -1) {
    console.log('There is already a package named', args[1], 'in', args[0]);
    process.exit(1);
}

if (licenseType !== 'underscore' && licenseType !== 'amp') {
    console.log('Invalid license type:', args[2]);
    process.exit(1);
}

/* Add new module pack, resort, rewrite modules.json */
pack[category].push({name: newModule, license: licenseType});
pack[category].sort();
writeJSON(__dirname + '/../modules.json', pack);

/* Generate folders and files */
require('./gen-folders');

/* Add to tests */
require('./gen-testrunner');
