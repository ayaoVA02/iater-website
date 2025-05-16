const express = require("express");
const router = express.Router();
const post = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management (CRUD)
 */

/**
 * @swagger
/api/posts:
*  post:
*    summary: Create a new post (Admin only)
*    tags: [Posts]
*    security:
*      - bearerAuth: []
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            type: object
*            required: [title, content, types, user_id]
*            properties:
*              title:
*                type: string
*              content:
*                type: string
*              viewer:
*                type: integer
*                default: 0
*              types:
*                type: string
*                enum: [EXTERNAL, INTERNAL_ACTIVITY, RESEARCH]
*              images:
*                type: string
*              user_id:
*                type: integer
*    responses:
*      201:
*        description: Post created successfully
 */
router.post("/", authMiddleware, roleMiddleware("ADMIN"), post.create);

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
 *         application/json:
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
 *                 description: URL or path to the image
 *     responses:
 *       200:
 *         description: Post updated successfully
 */
router.put("/:id", authMiddleware, roleMiddleware("ADMIN"), post.edit);

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
router.delete("/:id", authMiddleware, roleMiddleware("ADMIN"), post.delete);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts (any authenticated user)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *           
 */
router.get("/", post.select);

module.exports = router;
