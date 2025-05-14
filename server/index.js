
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./src/models");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const userRoutes = require("./src/routes/userRoutes");
const swagger = require("./src/swagger/swagger");
const PORT = process.env.PORT;

const corsOptions = {
  origin: ['http://localhost:3000'], // Add allowed client URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes)


swagger(app);

// Connect DB
db.sequelize.sync();

module.exports = app;
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
