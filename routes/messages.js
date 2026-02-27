const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/', messageController.sendMessage);
router.get('/conversations', messageController.getConversations);
router.get('/conversations/:id', messageController.getMessages);

module.exports = router;
