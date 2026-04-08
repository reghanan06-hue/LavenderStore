

import express from "express";
import { createComment, getComments, getComment } from "../controllers/commentController.js";

const router = express.Router();

// GET all comments
router.get("/", getComments);

// GET single comment by id
router.get("/:id", getComment);

// POST new comment
router.post("/", createComment);

export default router;





