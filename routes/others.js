const express = require('express');
const router = express.Router();
const otherController = require('../controllers/otherController');

// Notifications
router.get('/notifications', otherController.getNotifications);
router.put('/notifications/:id/read', otherController.markRead);

// Reports
router.post('/reports', otherController.createReport);

module.exports = router;
