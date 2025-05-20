const db = require("../models");
const fs = require("fs");
const path = require("path");
const Post = db.Post;
const isNonEmptyString = (val) => typeof val === "string" && val.trim() !== "";
const isNonNegativeInteger = (val) => Number.isInteger(val) && val >= 0;

// Helper to delete file safely
const deleteFile = (filePath) => {
  if (filePath && fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

exports.create = async (req, res) => {
  const { title, content, types, user_id, viewer } = req.body;
  const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : null;

  if (!isNonEmptyString(title) || !isNonEmptyString(content) || !user_id) {
    return res.status(400).json({ error: "title, content, and user_id are required." });
  }

  if (viewer !== undefined && !isNonNegativeInteger(Number(viewer))) {
    return res.status(400).json({ error: "viewer must be a non-negative integer." });
  }

  try {
    const post = await Post.create({
      title,
      content,
      user_id,
      viewer: Number(viewer) || 0,
      types,
      images: imagePath,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (_req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const { title, content, viewer, user_id, types } = req.body;

    // If a new image is uploaded, delete the old one
    if (req.file && post.images && fs.existsSync(post.images)) {
      deleteFile(post.images);
    }

    const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : post.images;

    if (title && isNonEmptyString(title)) post.title = title;
    if (content && isNonEmptyString(content)) post.content = content;
    if (viewer !== undefined && isNonNegativeInteger(Number(viewer))) post.viewer = Number(viewer);
    if (user_id) post.user_id = user_id;
    if (types) post.types = types;
    post.images = imagePath;

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Delete image from filesystem if exists
    deleteFile(post.images);

    await post.destroy();
    res.json({ message: "Post and associated image deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
