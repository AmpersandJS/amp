var test = require('tape');
var compact = require('./compact');


test('amp-compact', function (t) {
    t.equals(compact([0, 1, false, 2, false, 3]).length, 3, 'can trim out all falsy values');
    var result = (function(){ return compact(arguments).length; }(0, 1, false, 2, false, 3));
    t.equal(result, 3, 'works on an arguments object');
    t.end();
});
   
