const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/02-Post/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
