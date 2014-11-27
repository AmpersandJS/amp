var indexOf = String.prototype.indexOf;


module.exports = function includes(string, query, position) {
    if (position) {
        string = string.slice(position);
    }
    return indexOf.call(string, query) !== -1;
};
