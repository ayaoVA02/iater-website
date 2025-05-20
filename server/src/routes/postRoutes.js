const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const uploadPath = path.join(__dirname, "../../../client/public/uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.test(ext)) cb(null, true);
    else cb(new Error("Only .png, .jpg and .jpeg formats are allowed."));
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management (CRUD)
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post (Admin only)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [title, content, types, user_id, images]
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               viewer:
 *                 type: integer
 *                 description: Optional number of viewers
 *               types:
 *                 type: string
 *                 enum: [EXTERNAL, INTERNAL_ACTIVITY, RESEARCH]
 *               images:
 *                 type: string
 *                 format: binary
 *               user_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Post created successfully
 */
router.post(
  "/",
  upload.single("images"),
  authMiddleware,
  roleMiddleware("ADMIN"),
  postController.create
);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Edit a post by ID (Admin only)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               viewer:
 *                 type: integer
 *               types:
 *                 type: string
 *                 enum: [EXTERNAL, INTERNAL_ACTIVITY, RESEARCH]
 *               images:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Post updated successfully
 */
router.put(
  "/:id",
  upload.single("images"),
  authMiddleware,
  roleMiddleware("ADMIN"),
  postController.update
);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post by ID (Admin only)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to delete
 *     responses:
 *       200:
 *         description: Post deleted successfully
 */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  postController.delete
);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   viewer:
 *                     type: integer
 *                   types:
 *                     type: string
 *                   images:
 *                     type: string
 *                   user_id:
 *                     type: integer
 */
router.get("/", postController.getAll);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a single post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A post object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *                 viewer:
 *                   type: integer
 *                 types:
 *                   type: string
 *                 images:
 *                   type: string
 *                 user_id:
 *                   type: integer
 */
router.get("/:id", postController.getById);

// Basic multer error handler for upload errors
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || (err && err.message && err.message.includes("Only .png"))) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

module.exports = router;
