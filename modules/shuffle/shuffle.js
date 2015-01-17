var values = require('amp-values');
var random = require('amp-random');


module.exports = function shuffle(obj) {
    var set = obj && obj.length === +obj.length ? obj : values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = random(0, index);
        if (rand !== index) shuffled[index] = shuffled[rand];
        shuffled[rand] = set[index];
    }
    return shuffled;
};
