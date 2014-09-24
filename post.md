# Modularizing underscore.js

Underscore.js is *the* most heavily depended on module on npm. 

Impressive work from Jeremy Ashkenas, who also created Backbone.js and CoffeeScript, both hugely popular projects. No matter what your personal preferences on those, that's quite an impressive feat. 

You simply can't deny that many people have found underscore useful.

The only odd thing is that from what I've seen, developers often include it for *one single* method!

Conceptually, it makes a sense. Why would you go implement your own `debounce` method when there's one in underscore that works great and has clearly been put through its paces—just install underscore, be happy, and go fry some bigger fish!

But, as it turns out [Jeremy doesn't like and intentionally doesn't follow semver]. As a result there were breaking changes between underscore versions 1.6.0 and 1.7.0. Which means that even when I'm creating small modules that are meant to be included I have to hard-code versions of dependencies.

This goes a bit against the grain of the node.js community at large. As the instigator behind [Ampersand.js](http://ampersandjs.com) a clientside framework that aims to be the most flexible, composable option out there. It never felt right that we hardcode have underscore 1.6.0 as a hard dependency of our modules, especially if we're only using a couple of methods in a given module.

If you've got 3 different versions of underscore installed in an app that's just going to run on a server somewhere, it probably isn't going to cause any big problems. npm handles that quite nicely for us.

But, on the clientside, it's a bit different. We've been happily using node and npm to manage code for all our clientside code at &yet for several years now. But of course for front-end code we have to send all the code we want to use to the browser. In this case, sending two or 3 different versions of underscore plus lo-dash might not be what you want. 

In the same way that I don't want to force you to use a certain template language or view layer in ampersand I don't want to pick your utility library either! But unless I want to re-implement stuff in underscore piece by piece I have to hardcode ampersand-model to use a specific version number, 1.6.0 for example. Because I can't trust that underscore won't introduce backwards incompatible changes in 1.6.1. What choice do we have?

Huge deal? Probably not. Annoying? definitely. 

To be clear, I didn't want to tackle this problem, I want it to go away. I'm not the only one, my buddy [Feross]() apparently reached the same conclusion:

Tiny module all the things! Independent modules, FTW! Right?!

Sort of... yes. Feross and I independently started pulling out functions from `async`, `underscore` and others that we wanted as independent modules, and essentially just repackaging them and publishing them on npm. 

It works great for one or two, but it masks another problem: Turns out it's kind of a pain. Having a seperate github repo, an npm package and a bunch of independently managed tests is one thing, but then also, what about names? You have to remember that you created a module called `extend-object` or was it `object-extend` and of course you have to remember it exists to begin with, go find it, then remember how to use it. Less-than-ideal. When I used to do a bunch of jQuery it was pretty simple, go to jQuery.com and look up what the  `closest()` method does. All in one, nice, cohesive site of releated stuff. 

Truth is: *the vast majority of the underscore methods are all generally related*. They solve a certain class of problem. They're essentially the "low-level" problems you often need, but don't want ot re-invent, but still don't want to be forced to use as an all-or-nothing.

The idea:

1. A utility module collection in a [single Github repo]
2. All the modules share the same structure:
    1. the implementation
    2. the tests
    3. the package.json file
    4. the doc file
    5. the generated readme
3. Shared build system
4. Namespaced package names `amp-` so we can 
5. Shared test sytem (can be tested invidually or all together)
6. We generate a nice, easily searchable doc site: something.com
7. All the modules are all published individually
8. Docs are intentionally not in the Readme's so that we can update docs without having to publish patch versions just to get the npm version of the readme updated.
9. Strict semver with the goal of publishing a bunch of 1.0.0 versioned modules that optimized for being "complete" and requiring absolutely minimal updates. 
10. Because there's no bundling and they're all individual modules, the collection can keep growing over time and there's very little "inclusion cost". So things that are currently relegated to underscore.contrib can be included too. 
11. We've started with the underscore methods we needed for ampersand, but plan to continue to expand it. 

We've calling it the [amp] project, check it out, and [tweet it some love](http://twitter.com/status?)

I'm [@HenrikJoreteg](http://twitter.com/henrikjoreteg) see you on twitter! Also, I wrote a book about sane JavaScript called [Human JavaScript](http://humanjavascript.com), [I teach JS](http://andyet.com/training), in addition, if you liked this post odds are you'll want to [check out Ampersand.js](http://ampersandjs.com) as well. If you want to hang out with a bunch of people working with these tools, come hang out in the #&yet IRC channel on freenode.
