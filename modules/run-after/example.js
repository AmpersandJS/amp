var runAfter = require('amp-run-after');
var each = require('amp-each');

var models = collection.where({edited: true});

var allDone = runAfter(function allDone() {
    console.log('all done!');
}, models.length);

each(models, function(note) {
    note.asyncSave({success: allDone});
});
// allDone is run once, after all notes have saved.
