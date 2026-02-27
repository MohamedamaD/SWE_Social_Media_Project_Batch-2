const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/05-Follow/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Follow', followSchema);
