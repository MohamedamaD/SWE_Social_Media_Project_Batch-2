const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/07-Notification-Report/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
