const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/06-Message/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Conversation', conversationSchema);
