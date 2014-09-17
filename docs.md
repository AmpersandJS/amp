## amp-clone


### the code

```javascript
var isObject = require('../is-object');
var isArray = require('../is-array');
var extend = require('../extend');


module.exports = function clone(obj) {
    if (!isObject(obj)) return obj;
    return isArray(obj) ? obj.slice() : extend({}, obj);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-clone.png)](https://ci.testling.com/ampersandjs/amp-clone)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-contains

Determines whether an array contains an item.

### `contains(array, item)`

* array {Array} the array to look in
* item {anything} the item to look for in the array

### the code

```javascript
var values = require('../values');
var indexOf = require('../index-of');


module.exports = function contains(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = values(obj);
    return indexOf(obj, target) >= 0;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-contains.png)](https://ci.testling.com/ampersandjs/amp-contains)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-defaults


### the code

```javascript
var isObject = require('../is-object');


module.exports = function defaults(obj) {
    if (!isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
        var source = arguments[i];
        for (var prop in source) {
            if (obj[prop] === void 0) obj[prop] = source[prop];
        }
    }
    return obj;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-defaults.png)](https://ci.testling.com/ampersandjs/amp-defaults)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-each


### the code

```javascript
var objKeys = require('../keys');


// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
        return func.call(context, value);
    };
    case 2: return function(value, other) {
        return func.call(context, value, other);
    };
    case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
    };
    }
    return function() {
        return func.apply(context, arguments);
    };
};


// _.keys was replaced with native Object.keys()
module.exports = function each(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
        for (i = 0; i < length; i++) {
            iteratee(obj[i], i, obj);
        }
    } else {
        var keys = objKeys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
        }
    }
    return obj;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-each.png)](https://ci.testling.com/ampersandjs/amp-each)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-escape


### the code

```javascript
var unescapeMap = {};
var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
};
for (var key in escapeMap) {
    unescapeMap[escapeMap[key]] = key;
}

 // Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper = function(map) {
    var escaper = function(match) {
        return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + Object.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
};

module.exports = createEscaper(escapeMap);
module.exports.unescape = createEscaper(unescapeMap);
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-escape.png)](https://ci.testling.com/ampersandjs/amp-escape)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-extend


### the code

```javascript
var isObject = require('../is-object');


module.exports = function(obj) {
    if (!isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
            obj[prop] = source[prop];
        }
    }
    return obj;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-extend.png)](https://ci.testling.com/ampersandjs/amp-extend)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-has


### the code

```javascript
module.exports = function has(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-has.png)](https://ci.testling.com/ampersandjs/amp-has)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-index-of


### the code

```javascript
var isObj = require('../is-object');
var arrayInd = Array.prototype.indexOf;


module.exports = function indexOf(obj, val) {
    if (!isObj(obj)) return -1;
    return arrayInd.call(obj, val);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-index-of.png)](https://ci.testling.com/ampersandjs/amp-index-of)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-invert


### the code

```javascript
var objKeys = require('../keys');


module.exports = function invert(obj) {
    var result = {};
    var keys = objKeys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-invert.png)](https://ci.testling.com/ampersandjs/amp-invert)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-arguments


### the code

```javascript
var toString = Object.prototype.toString;


module.exports = function (obj) {
    return toString.call(obj) === '[object Arguments]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-arguments.png)](https://ci.testling.com/ampersandjs/amp-is-arguments)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-array


### the code

```javascript
var toString = Object.prototype.toString;
var isArray = Array.isArray;


module.exports = isArray || function isArray(obj) {
    return toString.call(obj) === '[object Array]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-array.png)](https://ci.testling.com/ampersandjs/amp-is-array)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-date


### the code

```javascript
var toString = Object.prototype.toString;


module.exports = function isFunction(obj) {
    return toString.call(obj) === '[object Date]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-date.png)](https://ci.testling.com/ampersandjs/amp-is-date)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-empty


### the code

```javascript
module.exports = function isEmpty() {}
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-empty.png)](https://ci.testling.com/ampersandjs/amp-is-empty)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-equal


### the code

```javascript
var has = require('../has');


// Internal recursive comparison function for `isEqual`.
var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == require('../`.
    if (a == null || b == null) return a === b;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case '[object RegExp]':
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return '' + a === '' + b;
        case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN
            if (+a !== +a) return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
        if (typeof a != 'object' || typeof b != 'object') return false;

        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                                                         _.isFunction(bCtor) && bCtor instanceof bCtor)
                                                && ('constructor' in a && 'constructor' in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        size = a.length;
        result = size === b.length;
        if (result) {
            // Deep compare the contents, ignoring non-numeric properties.
            while (size--) {
                if (!(result = eq(a[size], b[size], aStack, bStack))) break;
            }
        }
    } else {
        // Deep compare objects.
        var keys = _.keys(a), key;
        size = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        result = _.keys(b).length === size;
        if (result) {
            while (size--) {
                // Deep compare each member
                key = keys[size];
                if (!(result = has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
            }
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
};


module.exports = function isEqual(a, b) {
    return eq(a, b, [], []);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-equal.png)](https://ci.testling.com/ampersandjs/amp-is-equal)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-function


### the code

```javascript
var toString = Object.prototype.toString;
var func = function isFunction() {
    return toString.call(obj) === '[object Function]';
}

// Optimize `isFunction` if appropriate. Work around an IE 11 bug.
if (typeof /./ !== 'function') {
    func = function isFunction(obj) {
      return typeof obj == 'function' || false;
    };
}

module.exports = func;
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-function.png)](https://ci.testling.com/ampersandjs/amp-is-function)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-nan

Tests whether object passed in is a `NaN`. Native implementations of `isNaN` return `true` when passed `undefined`. So if you want to test whether `NaN` is exactly `NaN` this does that. 

### `isNaN(obj)`

* obj {anything} Object to test

### the code

```javascript
var isNumber = require('../is-number');


module.exports = function isNaN(obj) {
    return isNumber(obj) && obj !== +obj;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-nan.png)](https://ci.testling.com/ampersandjs/amp-is-nan)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-null


### the code

```javascript
module.exports = function isNull(obj) {
    return obj === null;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-null.png)](https://ci.testling.com/ampersandjs/amp-is-null)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-number


### the code

```javascript
var toString = Object.prototype.toString;


module.exports = function isNumber(obj) {
    return toString.call(obj) === '[object Number]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-number.png)](https://ci.testling.com/ampersandjs/amp-is-number)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-object


### the code

```javascript
module.exports = function isObject(obj) {
    var type = typeof obj;
    return !!obj && (type === 'function' || type === 'object');
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-object.png)](https://ci.testling.com/ampersandjs/amp-is-object)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-regexp


### the code

```javascript
module.exports = function isRegexp() {}
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-regexp.png)](https://ci.testling.com/ampersandjs/amp-is-regexp)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-string


### the code

```javascript
var toString = Object.prototype.toString;


module.exports = function isString(obj) {
    return toString.call(obj) === '[object String]';
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-string.png)](https://ci.testling.com/ampersandjs/amp-is-string)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-is-undefined


### the code

```javascript
module.exports = function isUndefined(obj) {
    return obj === void 0;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-is-undefined.png)](https://ci.testling.com/ampersandjs/amp-is-undefined)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-keys


### the code

```javascript
var has = require('../has');
var isObject = require('../is-object');
var contains = require('../contains');
var nativeKeys = Object.prototype.keys;


// Keys in IE that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
var nonEnumerableProps = [
    'constructor',
    'valueOf',
    'isPrototypeOf',
    'toString',
    'propertyIsEnumerable',
    'hasOwnProperty',
    'toLocaleString'
];


module.exports = function keys(obj) {
    if (!isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);

    // fallback for IE
    if (hasEnumBug) {
        var nonEnumIdx = nonEnumerableProps.length;
        while (nonEnumIdx--) {
            var prop = nonEnumerableProps[nonEnumIdx];
            if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
        }
    }
    return keys;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-keys.png)](https://ci.testling.com/ampersandjs/amp-keys)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-last


### the code

```javascript
module.exports = function last() {}```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-last.png)](https://ci.testling.com/ampersandjs/amp-last)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-result


### the code

```javascript
var isFunction = require('../is-function');


module.exports = function result(object, property, defaultValue) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
        return defaultValue;
    }
    return isFunction(value) ? object[property]() : value;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-result.png)](https://ci.testling.com/ampersandjs/amp-result)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-to-camel-case


### the code

```javascript
var isString = require('../is-string');
var re1 = /([\W_\-]+\S?)/g;
var re2 = /[\W_]/g;


module.exports = function toCamelCase(string) {
    if (!isString(string)) return '';
    var replaced = string.replace(re1, function (match) {
        return match.replace(re2, '').toUpperCase();
    });
    return replaced.slice(0, 1).toLowerCase() + replaced.slice(1);
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-to-camel-case.png)](https://ci.testling.com/ampersandjs/amp-to-camel-case)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-unique-id


### the code

```javascript
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;


module.exports = function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-unique-id.png)](https://ci.testling.com/ampersandjs/amp-unique-id)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.
## amp-values


### the code

```javascript
module.exports = function values(obj) {
    var keys = Object.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
    }
    return values;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-values.png)](https://ci.testling.com/ampersandjs/amp-values)

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.