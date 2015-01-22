var test = require('tape');
var asyncEachSeries = require('./async-each-series');

test('amp-async-each-series', function (t) {
    t.plan(15);

    // simple array iteration
    var seenArrayItems = [];
    asyncEachSeries([1,2,3], function(n, cb) {
        seenArrayItems.push(n);
        cb();
    }, function(err) {
        t.error(err, 'no errors expected during iteration');
        t.deepEqual(seenArrayItems, [1, 2, 3], 'iteration was in proper order for simple array');
    });

    // simple object iteration
    var seenObjectIterations = [];
    asyncEachSeries({a: 1, b: 2, c: 3}, function(value, key, cb) {
        var iteration = {};
        iteration[key] = value;
        seenObjectIterations.push(iteration);
        cb();
    }, function(err) {
        t.error(err, 'no errors expected during iteration');
        t.deepEqual(seenObjectIterations, [{a: 1}, {b: 2}, {c: 3}]);
    });

    // iterating an empty array
    asyncEachSeries([], function() {
      t.fail('no items to iterate over, but iterator called');
    }, function(err) {
      t.error(err, 'no error when iterating over empty array');
    });

    // iterating a propertyless object
    asyncEachSeries({}, function() {
      t.fail('no keys to iterate over, but iterator called');
    }, function(err) {
      t.error(err, 'no error when iterating over keyless object');
    });

    // iterates even when no callback or context given
    asyncEachSeries([1], function(n, cb) {
      t.equal(n, 1, 'iterator still called even when no callback given');
      cb();
    });

    // iteration when context is given, but no callback
    var context = { a: true };
    asyncEachSeries([1], function(n, cb) {
        t.equal(this.a, true, 'uses context passed in as `this`');
        cb();
    }, context);

    // iteration when context and callback are given
    asyncEachSeries([1], function(n, cb) {
      t.equal(this.a, true, 'uses context passed in as `this`');
      cb();
    }, context, function(err) {
      t.error(err, 'no error when iterating with context and callback');
    });

    // error callbacks bail on future iterations
    var successfulIterationsCalled = 0;
    asyncEachSeries([1, 2, 3], function(n, cb) {
        if (n === 2) {
          cb(new Error('purposeful failure'));
        } else {
          successfulIterationsCalled ++;
          cb();
        }
    }, function(err) {
        t.assert(err instanceof Error);
        t.equal(1, successfulIterationsCalled);
    });

    var iteratorCalls = 0;
    var shiftyArray = [1, 2, 3];
    asyncEachSeries(shiftyArray, function(n, cb) {
      iteratorCalls ++;
      if (iteratorCalls === 3) {
        shiftyArray.push(4);
      } else if (iteratorCalls === 4) {
        t.equal(4, n, 'adding elements to array after iteration has begun iterates them');
      }
      cb();
    }, function(err) {
        t.error(err, 'no error expected');
        t.equal(iteratorCalls, 4, 'iterator should be called even for items added during iteration');
    });
  });
