var indexOf = String.prototype.indexOf;


module.exports = function includes(string, query, position) {
    return indexOf.call(string, query, position) !== -1;
};
