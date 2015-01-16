var pluck = require('amp-pluck');

var items = [{name: 'Cog', price: 100}, {name: 'Sprocket', price: 99}];

pluck(items, 'name'); //=> ['Cog', 'Sprocket']
