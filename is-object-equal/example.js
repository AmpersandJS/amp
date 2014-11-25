var isObjectEqual = require('amp-is-object-equal');

var swede = {name: 'Swede', greeting: ['oh', 'hello', 'there']};
var swedeClone = {name: 'Swede', greeting: ['oh', 'hello', 'there']};

// they're not the same instance
swede == swedeClone; //=> false 
// but they're deep equal
isObjectEqual(swede1, swedeClone); //=> true
