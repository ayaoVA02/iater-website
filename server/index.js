const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./src/models");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const userRoutes = require("./src/routes/userRoutes");
const swagger = require("./src/swagger/swagger");

<<<<<<< HEAD
const corsOptions = {
  origin: ['http://localhost:3000','http://localhost:5173' ], // Add allowed client URLs
=======
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173'],
>>>>>>> d8f7b04e2a9de2309be79382a7d8d8cff8a4e336
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

// Swagger
swagger(app);

// DB Sync and Start with error handling
db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
      console.log(`📘 Swagger docs at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch(err => {
    console.error("❌ Failed to sync database:", err);
    process.exit(1);
  });

module.exports = app;
