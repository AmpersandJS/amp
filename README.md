# amp (an idea)

So, there's a bit of a problem. 

We don't want underscore as a hard dependency of a bunch of little libraries. In many of the modules in [Ampersand.js](http://ampersandjs.com/) we only want a single function. Also, I don't want to build some half-ass, untested implementation of some utility function that should just be rock solid.

Frankly, I've hit this problem 100 times when working on small modules that are meant to be used as part of a whole app. 

Sure, if you're building a whole application, just use underscore and be happy (hardcode the version in your `package.json`). Then you get the nice chaining functionality, etc. 

Small utilities are a bit unique in that they really shouldn't require much maintanance. Seriously. These are for the most part "solved problems". I just want to publish a `1.0.0` and be "done".

But when writing modules that are just little tools for building other stuff, it's really annoying in browser land to include something like underscore or lodash as a subdependency.

So why not use lodash? Well something like the independent modules in lodash seem ideal, but the truth is the modules created by that lodash CLI sometimes have strangely long dependency chains, even for simple methods.

Plus, I want these to be "done". I don't want to have `npm outdated` tell me that lo-dash is outdated because some other thing in that lib has changed when I'm only using the one function at that point *I really don't care*. I want them independently versioned and ideally, *never changed at all*!

Ideally we want a bunch of small independent modules that are more like a loose collection, much like ampersand itself. They use each other when necessary to maximize code re-use, but they're as looslely coupled as possible.


## So why not just use a bunch of already isolated modules like `extend-object` from npm?

Well, because wouldn't it be nice if they had really easy memorable names and a nice shared documentation site? They don't, but this will!

So, we namespace! And we create a bunch of build scripts to make them super consistent "amp-". Keep and maintain them all in a single git repo, but publish them independently.


## What else needs to happen?

- Figure out if this is a good idea.
- Figure out where to draw the line in terms of browser support.
- Publish 1.0.0 of each of them and adhere to strict [semver](http://semver.org/) versioning. Ideally never pushing breaking changes at all (which seems unlikely anyway given the very limited scope).


## Building, etc

This stuff is crazy tedious so as much of it is scripted as possible. 

It all starts with the `packages` array in `package.json`. It contains a list of all the modules.

For each item listed in `packages` there's a corresponding folder in this project. 

It contains a standard set of files:

- The implementation
- the test
- generated, standard readme
- package.json
- the documentation file


### Running all the tests:

- run `npm test`

### Adding a new package:

- add its name to the `packages` array in `package.json`
- run `npm run folders`
- a new folder will be generated with all the basics, as a starting point

### Building readmes:

- Make sure the folder has `doc.md` file
- run `npm run readmes`

### Convert everything to relative requires and back

- `npm run make-local`

### Make sure everything is clean and follows conventions

- `npm run validate`



## Let's discuss stuff in [issues](https://github.com/HenrikJoreteg/amp/issues)
