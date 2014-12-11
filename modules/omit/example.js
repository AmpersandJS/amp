var omit = require('amp-omit');

omit({name: 'Bob', department: 'Sales', age: 30}, 'name', 'age'); //{department: 'Sales'}
omit({name: 'Bob', department: 'Sales', age: 30}, function (value, key, object) { return key === 'name' }); //{department: 'Sales', age: 30}
