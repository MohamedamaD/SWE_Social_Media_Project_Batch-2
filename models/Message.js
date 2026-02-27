const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/06-Message/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
