const db = require("../models");
const Post = db.Post;

// Helper to check non-empty string
const isNonEmptyString = (val) => typeof val === "string" && val.trim() !== "";

// Helper to check non-negative integer
const isNonNegativeInteger = (val) => Number.isInteger(val) && val >= 0;

exports.create = async (req, res) => {
  const { title, content, types, images, user_id } = req.body;
  const viewer = req.body.viewer || 0;

  // Validation
  if (!isNonEmptyString(title) || !isNonEmptyString(content) || !isNonEmptyString(types) || !user_id) {
    return res.status(400).json({
      error: "Fields 'title', 'content', 'types', and 'user_id' are required and must be valid.",
    });
  }

  if (!isNonNegativeInteger(viewer)) {
    return res.status(400).json({ error: "'viewer' must be a non-negative integer." });
  }

  if (images !== undefined && typeof images !== "string") {
    return res.status(400).json({ error: "'image' must be a string if provided." });
  }

  try {
    const post = await Post.create({ title, content, viewer, types, images, user_id });
    return res.status(201).json(post);
  } catch (err) {
    console.error("Create Error:", err);
    return res.status(500).json({ error: err.message });
  }
};

exports.edit = async (req, res) => {
  const { title, content, viewer, types, images } = req.body;
  const { id } = req.params;

  // At least one field to update should be present
  if (
    title === undefined &&
    content === undefined &&
    viewer === undefined &&
    types === undefined &&
    images === undefined
  ) {
    return res.status(400).json({ error: "At least one field must be provided to update." });
  }

  // Validate each if provided
  if (title !== undefined && !isNonEmptyString(title)) {
    return res.status(400).json({ error: "'title' must be a non-empty string." });
  }
  if (content !== undefined && !isNonEmptyString(content)) {
    return res.status(400).json({ error: "'content' must be a non-empty string." });
  }
  if (types !== undefined && !isNonEmptyString(types)) {
    return res.status(400).json({ error: "'types' must be a non-empty string." });
  }
  if (viewer !== undefined && !isNonNegativeInteger(viewer)) {
    return res.status(400).json({ error: "'viewer' must be a non-negative integer." });
  }
  if (images !== undefined && typeof images !== "string") {
    return res.status(400).json({ error: "'image' must be a string." });
  }

  try {
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    await post.update({ title, content, viewer, types, images });
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
