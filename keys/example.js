var keys = require('amp-keys');

var obj = {
    hi: 'there',
    oh: 'hello there'
};

keys(obj); //=> ['hi', 'oh']
keys(undefined) //=> []
