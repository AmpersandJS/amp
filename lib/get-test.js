module.exports = function (methodName, testName) {
    return [
        "var test = require('tape');",
        "var pack = require('./package.json');",
        "var " + methodName + " = require('./' + pack.main);",
        "",
        "",
        "test('" + testName + "', function (t) {",
        "    t.end();",
        "});"
    ].join('\n');
};
