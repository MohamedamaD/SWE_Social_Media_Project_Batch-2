const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/04-Like/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Like', likeSchema);
