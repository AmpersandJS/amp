var sortBy = require('amp-sort-by');

//Sort by property
var array = [
    {id: 1, name: 'larry'},
    {id: 2, name: 'curly'},
    {id: 3, name: 'moe'}
];

sortBy(array, 'name');
//=> [ { id: 2, name: 'curly' }, { id: 1, name: 'larry' }, { id: 3, name: 'moe' } ]

//Sort by function

sortBy(array, function (item) {
    return item.name.length;
});
//=> [ { id: 3, name: 'moe' }, { id: 1, name: 'larry' }, { id: 2, name: 'curly' } ]


//Using context

var Collection = function () {
    this.sortAttribute = 'name';
    this.items = array;
};

var collection = new Collection();

sortBy(array, function (item) { return item[this.sortAttribute]; }, collection);
//=> [ { id: 2, name: 'curly' }, { id: 1, name: 'larry' }, { id: 3, name: 'moe' } ]
