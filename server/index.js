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

const PORT = process.env.PORT || 3000;

app.use(cors({
  // origin: ['http://localhost:5173'],

    origin: [
    'http://localhost:5173',
    'https://onlyyao.cafe24.com',
    'https://iater.cafe24app.com',
    'http://iater.org'
  ],
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



// Serve static files
const distPath = path.join(__dirname, "../dist");
console.log("Static files path:", distPath);
app.use(express.static(distPath));


// / ✅ FIXED: Use regex instead of "*" for catch-all route
// This matches all routes that do NOT start with /api
app.get(/^(?!\/api).*$/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});


// check api health
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});
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
