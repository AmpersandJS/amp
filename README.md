# amp (just an idea)

So, there's a bit of a problem. 

We don't want underscore as a hard dependency of so many little libraries for things like [Ampersand.js](http://ampersandjs.com/) where we may only want a single function.

Frankly, I've hit this problem 100 times when working on module code. 

Sure, if you're building a whole application, just use underscore and be happy (hardcode the version in your `package.json`). Then you get the nice chaining functionality, etc. 

But when writing modules that are just little tools for building other stuff, it's really annoying in browser land to include something like underscore or lodash as a subdependency.

So why not use lodash? Well something like the independent modules in lodash seem ideal, but the truth is the modules created by that lodash CLI sometimes have strangely long dependency chains for simple methods.

Plus, I want these to be "done". I don't want to have `npm outdated` tell me that lo-dash is outdated because some other thing in that lib has changed when I'm only using the one function. I want them independently versioned and ideally, never changed at all!

Ideally we want a bunch of small independent modules that are more like a loose collection, much like ampersand itself. They use eachother to maximize code re-use, but they're as looslely coupled as possible.

Just to be clear, this isn't about counting bytes its about solving this particular problem in ampersand.


## So why not just use a bunch of already isolated modules like `extend-object` from npm?

Well, because wouldn't it be nice if they had really easy memorable names and a nice shared documentation site?

So, we namespace! I'm thinking we pick some namespace for all the names, perhaps "amp-", then maybe even keep all of these in a single git repo like this (because the APIs aren't going to change, that's kind of the point.

Crazy? Maybe. **I'm not yet saying this is a good idea**. I just think it *might* be.

[What say ye](https://github.com/HenrikJoreteg/amp/issues)?

Let me be perfectly clear, this feels like a duplication of ideas and I question whether this is the right path. I'm perfectly happy being wrong here. 


## What would need to happen?

- Figure out if this is a good idea.
- Figure out where to draw the line in terms of browser support.
- Port the relevant underscore tests, run them with testling to make sure it all works.
- Publish 1.0.0 of each of them and adhere to strict [semver](http://semver.org/) versioning. Ideally never pushing breaking changes at all (which seems unlikely anyway given the very limited scope).


## Building, etc

This stuff is crazy tedious so as much of it is scripted as possible. 

It all starts with the `packages` array in `package.json`. It contains a list.


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



## Let's discuss stuff in [issues](https://github.com/HenrikJoreteg/amp/issues)
