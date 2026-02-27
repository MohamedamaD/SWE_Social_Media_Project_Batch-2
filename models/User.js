const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/01-User/specs.md
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
