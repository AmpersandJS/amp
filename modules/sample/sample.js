var values = require('amp-values');
var random = require('amp-random');
var shuffle = require('amp-shuffle');


module.exports = function sample(obj, n, guard) {
    if (n == null || guard) {
        if (obj.length !== +obj.length) obj = values(obj);
        return obj[random(obj.length - 1)];
    }
    return shuffle(obj).slice(0, Math.max(0, n));
};
