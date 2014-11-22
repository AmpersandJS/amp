/*global console, process*/
var pack = require('./package.json');
var fs = require('fs');
var renderJade = require('./lib/render-jade');
var templateGlobals = {};
var getModules = require('./lib/get-modules');
var contributors = require('./contributors.json');
var coreContributors = require('./core-contributors.json');


function build() {
    console.log('starting build');

    // build docs pages from npm for core modules
    getModules(pack.coreModules, function (err, modules) {
        templateGlobals.modules = modules;
        renderJade(__dirname + '/docs/index.jade', templateGlobals);
    });

    // filter out core
    contributors = contributors.filter(function (member) {
        return !coreContributors[member.user];
    });

    renderJade(__dirname + '/contribute/index.jade', {
        contributors: contributors,
        coreContributors: coreContributors
    });
}

// optional watcher
if (process.argv.slice(2)[0] === '-w') {
    console.log('started watching');
    fs.watch('learn_markdown', build);
    fs.watch('docs', build);
    fs.watch('index.jade', build);
}

build();
