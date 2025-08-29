import authRoutes from "./routes/auth.js";
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.config.js";

const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Register routes AFTER middleware
app.use("/", authRoutes);

// Example API routes
app.get("/ping", (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? "ping";
  res.json({ message: ping });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
