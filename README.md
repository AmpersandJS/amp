# amp

![](https://travis-ci.org/AmpersandJS/amp.svg)

[![amp logo](http://amp.ampersand.com/documentation/public/images/ampersand-amp.svg)](http://amp.ampersandjs.com/)

Documentation is here: http://amp.ampersandjs.com

To discuss, jump into the [Ampersand.js Project Chatroom](https://gitter.im/AmpersandJS/AmpersandJS).

## Building, etc

Everything is heavily scripted to maintain consistency.

It all starts with the modules listed in `modules.json`. For each item listed in there's a corresponding folder in the `modules` directory.

It contains a standard set of files:

- The implementation
- the test
- generated, standard readme
- package.json
- the documentation markdown file
- the method signature file
- the example file

## Cross browser testing

For cross browser testing on each push, things are set up to run against SauceLabs's browser VMs using Travis CI.

### Running all the tests:

- `npm test`

### Run all the tests on saucelabs

- `npm run test-ci`

### Adding a new package:

- add its name (unprefixed) to `modules.json`
- run `npm run build`
- a new folder will be generated with all the basics and a failing test as a starting point

### Convert everything to relative requires and back

- `npm run make-local`

### Make sure everything is clean and follows conventions

- `npm run validate`

### License

MIT
