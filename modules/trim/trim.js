var trimRE = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
var nativeTrim = String.prototype.trim;


module.exports = function trim(string) {
    if (nativeTrim) {
        return nativeTrim.call(string);
    }
    return string.replace(trimRE, '');
};
