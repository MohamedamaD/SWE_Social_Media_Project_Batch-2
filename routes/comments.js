const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:id/reply', commentController.replyComment);

module.exports = router;
