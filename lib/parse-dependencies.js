// get dependencies and devDependencies (interdependencies only)
// by parsing code
var re = /require\(\'(amp-|\.\.\/)([a-z\-]+)\'/g;

// cleans off string because i'm bad at capturing groups
// in regexes apparently
function cleanMatch(str) {
    return str
        .replace('require(\'amp-', '')
        .replace('require(\'../', '')
        .replace('\'', '');
}

module.exports = function (code) {
    return (code.match(re) || []).map(cleanMatch).sort();
};
