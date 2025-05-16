module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM("ADMIN"),
      defaultValue: "ADMIN",
    },
  }, {
    timestamps: true,
    tableName: "users", // Optional: specify actual table name
    underscored: true,  // created_at instead of createdAt
  });

  User.associate = models => {
    User.hasMany(models.Post, {
      foreignKey: "user_id",
      as: "posts",
      onDelete: "CASCADE",
    });
  };

  return User;
};
