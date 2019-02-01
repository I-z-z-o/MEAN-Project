const mongoose = require('mongoose');


//_id will be automatically created
const postSchema = mongoose.Schema({

  title: {
    type: String,
    required: true },

  content: {
    type: String,
    required: true}

});

module.exports = mongoose.model('Post', postSchema);

