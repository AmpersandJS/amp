## Welcome!

Hi there. 

### See something wrong? 

Please do a quick search in the issues to make sure it hasn't been reported before.

Also, please note if your suggestion will change the API for a given module, it's less likely we'll do it, unless it's dramatically better.

### Wanting to contribute a new module?

Much of the maintenance of minutia of this project is scripted for speed and consistency. 

When adding a new util module follow the steps below carefully to minimize the work it'll take you and will help keep discussion on the PR relevant to the actual implmenentation, ya know... the interesting part.

Here's how you'd add an `is-awesome` module:

1. Each folder contains a `doc.md` file that describes the method's usage. Open a new issue and please *write what the contents of the `doc.md` file would be for your `amp-is-awesome` module as part of the issue. This will clarify your intentions, (plus you'd have to write one anyway).

2. Add `is-awesome` to the `packages` array in `package.json` (note: do this alphabetically, don't include "amp" in the name).

3. From the root of your project directory run `npm run folders`. This will generate a new folder called `is-awesome` inside the project that will contain the following things:
    1. `doc.md` - this is where you'd put the documentation (in markdown format). Please copy the style of the others as closely as possible:
        1. no headings
        2. start with a usage example
        3. write a concise paragraph explaining its behavior, including any options or gotchas.
    2. `is-awesome.js` - this will contain some starter code as well. Simply include any requires you need (if any) and then complete the function.
    3. `package.json` - please edit the author name to be you :)
    4. `README.md` - leave this be, except change the acknowledgement to your name
    5. `test.js` - a stub of your test file. We use `tape` for tests. Just look at one of the other tests an mimic style. Write really thorough, awesome tests. You can't really "over do" this part. Remember, the goal is to never publish an update.

4. From there, write your implementation, your tests, send us a pull request. 


## Running the tests 

You can either run *all* the tests for all the modules by doing `npm test` from the project root, this will include yours, or do it just for module by running `npm test` after `cd`'ing into your folder.

## Thanks! You're awesome :)
