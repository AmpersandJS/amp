module.exports = function (string) {
    var replaced = string.replace(/([\W_\-]+\S?)/g, function (match) {
        return match.replace(/[\W_]/g, '').toUpperCase();
    });
    return replaced.slice(0, 1).toLowerCase() + replaced.slice(1);
};
