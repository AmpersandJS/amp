var result = require('amp-result');
var obj = {
    hi: 'there',
    oh: function () {
        return 'hello there'
    }
};

result(obj, 'hi'); //=> 'there'
result(obj, 'oh'); //=> 'hello there'
result(obj, 'nothing', 'wat'); //=> 'wat'
