// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js"; 
// import userRoutes from "./routes/userRoutes.js"; 
// import commentsRoutes from "./routes/commentRoutes.js"; 


// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/users", userRoutes);
// // app.use("/story", commentsRoutes);
// app.use("/story", commentsRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log("Server running on port " + PORT));


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import commentsRoutes from "./routes/commentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Vercel Serverless - connect to MongoDB before routes
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection failed" });
  }
});

// Routes
app.use("/users", userRoutes);
app.use("/story", commentsRoutes);

export default app;
