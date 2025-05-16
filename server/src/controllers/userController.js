const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

// Simple email format check
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && re.test(email);
};

exports.edit = async (req, res) => {
  const userId = req.params.id;
  const updates = { ...req.body };

  try {
    // Remove fields that should not be updated directly
    delete updates.id;
    delete updates.createdAt;
    delete updates.updatedAt;

    // Validate email if provided
    if (updates.email && !isValidEmail(updates.email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Validate password if provided
    if (updates.password) {
      if (typeof updates.password !== "string" || updates.password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long." });
      }
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    // Check if there's anything to update
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No valid data provided for update." });
    }

    const [updated] = await User.update(updates, {
      where: { id: userId },
    });

    if (updated === 0) {
      return res.status(404).json({ error: "User not found or not updated." });
    }

    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  const userId = req.params.id;
  try {
    const deleted = await User.destroy({ where: { id: userId } });

    if (deleted === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json({ message: "User deleted." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] } // don't send password hash to client
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

