module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    viewer: { type: DataTypes.INTEGER, defaultValue: 0 },
    types: {
      type: DataTypes.ENUM("EXTERNAL", "INTERNAL_ACTIVITY", "RESEARCH"),
      allowNull: false,
    },
    images: { type: DataTypes.STRING, allowNull: false },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
  }, {
    timestamps: true,
    tableName: "posts",
    underscored: true,
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });
  };

  return Post;
};
