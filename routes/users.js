const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/:id/follow', protect, userController.followUser);
router.delete('/:id/unfollow', protect, userController.unfollowUser);
router.get('/:id/followers', protect, userController.getFollowers);
router.get('/:id/following', protect, userController.getFollowing);

module.exports = router;
