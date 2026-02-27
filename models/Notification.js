const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/07-Notification-Report/specs.md
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
