## Welcome!

Hi there.

### See something wrong?

Please do a quick search in the issues to make sure it hasn't been reported before.

Also, please note if your suggestion will change the API for a given module, it's less likely we'll do it, unless it's dramatically better.

### Wanting to contribute a new module?

Much of the maintenance of minutia of this project is scripted for speed and consistency.

When adding a new util module follow the steps below carefully to minimize the work it'll take you and will help keep discussion on the PR relevant to the actual implmenentation, ya know... the interesting part.

Here's how you'd add an `is-awesome` module to `collections`:

1. Run the add-module script, giving it the category and your new module name.

```
$ node bin/add-module collections is-awesome
```

2. From there, write your implementation, your tests, send us a pull request.

## Running the tests

You can either run *all* the tests for all the modules by doing `npm test` from the project root, this will include yours, or do it just for module by running `npm test` after `cd`'ing into your folder.

## Thanks! You're awesome :)
