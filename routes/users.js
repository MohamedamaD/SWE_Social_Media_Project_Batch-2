const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/:id/follow', userController.followUser);
router.delete('/:id/unfollow', userController.unfollowUser);
router.get('/:id/followers', userController.getFollowers);
router.get('/:id/following', userController.getFollowing);

module.exports = router;
