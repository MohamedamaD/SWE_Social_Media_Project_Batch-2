const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/03-Comment/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
