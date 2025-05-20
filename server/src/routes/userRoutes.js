const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *         
 *       404:
 *         description: User not found
 */
router.get("/:id", authMiddleware, roleMiddleware("ADMIN"), userController.getUser);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User email
 *               password:
 *                 type: string
 *                 description: User password (min 6 chars)
 *               name:
 *                 type: string
 *                 description: Full name of the user
 *               role:
 *                 type: string
 *                 enum: [ADMIN]
 *                 description: User role (only "ADMIN" allowed)
 *             example:
 *               email: admin@gmail.com
 *               password: admin123
 *               name: admin
 *               role: ADMIN
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: No valid data provided or invalid input
 *       404:
 *         description: User not found
 */
router.put("/:id", authMiddleware, roleMiddleware("ADMIN"), userController.edit);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted
 *       404:
 *         description: User not found
 */
router.delete("/:id", authMiddleware, roleMiddleware("ADMIN"), userController.delete);

module.exports = router;
