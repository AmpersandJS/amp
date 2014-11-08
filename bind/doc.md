```javascript
bind(func, object, *arguments);
```

Bind a function to an object, meaning that whenever the function is called, the value of `this` will be the object. Optionally, pass arguments to the function to pre-fill them, also known as partial application.

**note:** If you *know* you're in an environment where you have native `Function.prototype.bind` there's really no reason not to just use that. It even does the partial application as described above. Most JS runtimes have it these days. Notable exceptions are Phantom.js and IE8 or older.

```javascript
var bind = require('amp-bind');

var obj = {};
var func = function (greeting, who) {
    console.log(greeting, who);    
    console.log(this === obj);
};

var bound = bind(func, object, 'hello', 'there');

bound();
//=> 'hello there'
//=> true

```
