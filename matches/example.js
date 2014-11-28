var matches = require('amp-matches');
var filter = require('amp-filter');

var list = [
    {name: 'Someone', awesome: false},
    {name: 'Someone Else', awesome: true},
    {name: 'Paul Irish', awesome: true}
];
var awesomenessChecker = matches({awesome: true});
var awesomePeople = filter(list, awesomenessChecker);

console.log(awesomePeople);
//=> [
//=>    {name: 'Someone Else', awesome: true},
//=>    {name: 'Paul Irish', awesome: true}
//=> ]

