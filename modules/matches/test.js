var test = require('tape');
var matches = require('./matches');
var map = require('amp-map');


test('amp-matches', function (t) {
    var moe = {name: 'Moe Howard', hair: true};
    var curly = {name: 'Curly Howard', hair: false};
    var stooges = [moe, curly];

    t.equal(matches({hair: true})(moe), true, 'Returns a boolean');
    t.equal(matches({hair: true})(curly), false, 'Returns a boolean');

    t.equal(matches({__x__: undefined})(5), false, 'can match undefined props on primitives');
    t.equal(matches({__x__: undefined})({__x__: undefined}), true, 'can match undefined props');

    t.equal(matches({})(null), true, 'Empty spec called with null object returns true');
    t.equal(matches({a: 1})(null), false, 'Non-empty spec called with null object returns false');

    /* TODO 
    t.ok(_.find(stooges, matches({hair: false})) === curly, 'returns a predicate that can be used by finding functions.');
    t.ok(_.find(stooges, matches(moe)) === moe, 'can be used to locate an object exists in a collection.');
    t.deepEqual(_.where([null, undefined], {a: 1}), [], 'Do not throw on null values.');

    t.deepEqual(_.where([null, undefined], null), [null, undefined], 'null matches null');
    t.deepEqual(_.where([null, undefined], {}), [null, undefined], 'null matches {}');
    t.deepEqual(_.where([{b: 1}], {a: undefined}), [], 'handles undefined values (1683)');

    _.each([true, 5, NaN, null, undefined], function(item) {
        t.deepEqual(_.where([{a: 1}], item), [{a: 1}], 'treats primitives as empty');
    });
    */

    function Prototest() {}
    Prototest.prototype.x = 1;
    var specObj = new Prototest;
    var protospec = matches(specObj);
    t.equal(protospec({x: 2}), true, 'spec is restricted to own properties');

    specObj.y = 5;
    protospec = matches(specObj);
    t.equal(protospec({x: 1, y: 5}), true);
    t.equal(protospec({x: 1, y: 4}), false);

    t.ok(matches({x: 1, y: 5})(specObj), 'inherited and own properties are checked on the test object');

    Prototest.x = 5;
    t.ok(matches(Prototest)({x: 5, y: 1}), 'spec can be a function');

    // #1729
    var o = {'b': 1};
    var m = matches(o);

    t.equal(m({'b': 1}), true);
    o.b = 2;
    o.a = 1;
    t.equal(m({'b': 1}), true, 'changing spec object doesnt change matches result');


    //null edge cases
    var oCon = matches({'constructor': Object});
    t.deepEqual(map([null, undefined, 5, {}], oCon), [false, false, false, true], 'doesnt fasley match constructor on undefined/null');
    t.end();
});
