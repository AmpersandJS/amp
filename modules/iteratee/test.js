var test = require('tape');
var iteratee = require('./iteratee');
var createCallback = require('amp-create-callback');
var matches = require('amp-matches');
var property = require('amp-property');


test('amp-iteratee', function (t) {
    t.equal(iteratee()('hi'), 'hi', 'calling with empty values should return an identity function');
    t.equal(iteratee(null)('hi'), 'hi', 'calling with null should return an identity function');
    
    var context = {};
    var actualContext;
    var func = function () {
        actualContext = this;
        return 'hi';
    };
    
    t.equal(iteratee(func).toString(), createCallback(func).toString(), 'fn should return same as createCallback');
    t.equal(iteratee(func, context)(), 'hi', 'fn should return same as createCallback');
    t.equal(context, actualContext, 'should have retained passed context');
    
    // passing an object
    var matcher = {awesome: true};
    var func1 = iteratee(matcher);
    var func2 = matches(matcher);

    var personToCheck = {name: 'someone', awesome: true};

    t.strictEqual(func1(personToCheck), true, 'should create a matcher that returns true');
    t.equal(func1(personToCheck), func2(personToCheck), 'when given a function, creates callback that works same as createCallback');
    
    // passing a property name
    var propertyName = 'name';

    func1 = iteratee(propertyName);
    func2 = property(propertyName);

    var personToCheck = {name: 'someone', awesome: true};

    t.equal(func1(personToCheck), 'someone', 'works like property when passed a string');
    t.equal(func1(personToCheck), func2(personToCheck), 'gives sames result as property');

    t.end();
});
