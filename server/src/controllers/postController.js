const db = require("../models");
const Post = db.Post;

exports.create = async (req, res) => {
  const { title, content, types, image, user_id } = req.body;
  const viewer = req.body.viewer || 0;

  if (!title || !content || !types || !user_id) {
    return res.status(400).json({
      error: "Fields 'title', 'content', 'types', and 'user_id' are required.",
    });
  }

  try {
    const post = await Post.create({ title, content, viewer, types, image, user_id });
    return res.status(201).json(post);
  } catch (err) {
    console.error("Create Error:", err);
    return res.status(500).json({ error: err.message });
  }
};

exports.edit = async (req, res) => {
  const { title, content, viewer, types, image } = req.body;
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    await post.update({ title, content, viewer, types, image });
    return res.json({ message: "Post updated successfully", post });
  } catch (err) {
    console.error("Edit Error:", err);
    return res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    await post.destroy();
    return res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    return res.status(500).json({ error: err.message });
  }
};

exports.select = async (_req, res) => {
  try {
    const posts = await Post.findAll();
    return res.json(posts);
  } catch (err) {
    console.error("Fetch Error:", err);
    return res.status(500).json({ error: err.message });
  }
};
