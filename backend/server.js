import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import userRoutes from "./routes/userRoutes.js"; 
import commentsRoutes from "./routes/commentRoutes.js"; 


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
// app.use("/story", commentsRoutes);
app.use("/story", commentsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));