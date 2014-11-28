var createCallback = require('amp-create-callback');

var callback = createCallback(function () {
    // something
}, context, 3);

[1, 2, 3].map(callback);
