var asyncEachSeries = require('amp-async-each-series');

var list = ['oh', 'hello', 'there'];
var obj = {name: 'Henrik', greeting: 'Oh, hello there!'};

asyncEachSeries(list, function (item, cb) {
  console.log(item);
  cb();
}, function(err) {
  console.log('done', null);
});
//=> 'oh'
//=> 'hi'
//=> 'there'
//=> 'done'

asyncEachSeries(obj, function (value, key, cb) {
    console.log(value, key);
    cb();
}, function(err) {
    console.log('done', err);
});
//=> 'Henrik', 'name'
//=> 'Oh, hello there!', 'greeting'
//=> 'done', null

// with a context
var myContext = {thing: 'stuff'};

asyncEachSeries([1, 2], function (n, cb) {
  console.log(this);
  cb();
}, myContext, function(err) {
    console.log('done', err);
};
//=> {thing: 'stuff'}
//=> {thing: 'stuff'}
//=> 'done', null

asyncEachSeries([1, 2], function (n, cb) {
  console.log(n);
  cb();
});
//=> 1
//=> 2
