const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

// Post CRUD
router.post('/', postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

// Likes
router.post('/:id/like', postController.likePost);
router.get('/:id/likes', postController.getPostLikes);

// Comments
router.post('/:id/comments', commentController.addComment);
router.get('/:id/comments', commentController.getComments);

module.exports = router;
