var pick = require('amp-pick');

pick({name: 'Bob', department: 'Sales', age: 30}, 'name', 'age'); //{name: 'Bob', age: 30}
pick({name: 'Bob', department: 'Sales', age: 30}, function (value, key, object) { return key === 'name' }); //{name: 'Bob'}
