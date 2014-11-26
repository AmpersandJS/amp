var packs = require('./get-packages')();


module.exports = function (name) {
    for (var i = 0, l = packs.length; i < l; i++) {
        if (packs[i].name === name || packs[i].bareName === name) {
            return packs[i];
        }
    }
};
