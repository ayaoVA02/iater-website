const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

exports.edit = async (req, res) => {
  const userId = req.params.id;
  const updates = { ...req.body };

  try {
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    delete updates.id;
    delete updates.createdAt;
    delete updates.updatedAt;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No valid data provided for update" });
    }

    const [updated] = await User.update(updates, {
      where: { id: userId },
    });

    if (updated === 0) {
      return res.status(404).json({ error: "User not found or not updated" });
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
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};