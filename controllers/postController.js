const Post = require("../models/Post");

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user?.id || req.user?._id,
      content: req.body.content,
      type: req.body.type,
      privacy: req.body.privacy,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL PUBLIC POSTS
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ privacy: "Public" })
      .populate("user", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE POST
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "user",
      "username email",
    );

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE POST
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    post.content = req.body.content || post.content;
    post.type = req.body.type || post.type;
    post.privacy = req.body.privacy || post.privacy;

    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE POST
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await post.deleteOne();

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LIKE POST
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    post.likesCount += 1;

    await post.save();

    res.status(200).json({ likes: post.likesCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET POST LIKES
exports.getPostLikes = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ likes: post.likesCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET POST COMMENTS
exports.getPostComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ comments: post.comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
