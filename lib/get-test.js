module.exports = function (methodName, testName, folderName) {
    return [
        'var test = require(\'tape\');',
        'var ' + methodName + ' = require(\'./' + folderName + '\');',
        '',
        '',
        'test(\'' + testName + '\', function (t) {',
        '    t.end();',
        '});'
    ].join('\n');
};
