import Comment from "../models/comment.js";

// CREATE
export const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
// GET ALL
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ONE
export const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ error: "Comment non trouvé" });
    }

    res.json(comment);
  } catch (error) {
    // Si ID invalide, renvoie 400 au lieu de planter
    if (error.name === "CastError") {
      return res.status(400).json({ error: "ID invalide" });
    }
    res.status(500).json({ error: error.message });
  }
};
