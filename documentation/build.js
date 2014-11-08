var pack = require('./package.json');
var slugger = require('slugger');
var path = require('path');
var rimraf = require('rimraf');
var fs = require('fs');
var jade = require('jade');
var renderJade = require('./lib/render-jade');
var marked = require('marked');
var metaMarked = require('meta-marked')
var async = require('async');
var templateGlobals = {};
var includes = [];
var intro = marked(fs.readFileSync(__dirname + '/intro.md', 'utf8'));
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
