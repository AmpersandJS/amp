```js
before(3, function);
```

Creates a version of the function that can be called no more than count times. The result of the last function call is memoized and returned when count has been reached.

```js
var before = require('amp-before');
var timesCalled = 0;
var getCount = function () {
    return ++timesCalled;
}
var modified = before(3, getCount); //=> returns modified function

console.log(modified()); //=> 1
console.log(modified()); //=> 2
console.log(modified()); //=> 2
```
