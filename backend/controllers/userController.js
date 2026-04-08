import User from "../models/user.js";

// CREATE
export const createUser = async (req, res) => {
  try {
    const patient = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// // GET ALL
// export const getPatients = async (req, res) => {
//   try {
//     const patients = await Patient.find();
//     res.json(patients);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// GET ONE
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "user non trouvé" });
    }

    res.json(user);
  } catch (error) {
    // Si ID invalide, renvoie 400 au lieu de planter
    if (error.name === "CastError") {
      return res.status(400).json({ error: "ID invalide" });
    }
    res.status(500).json({ error: error.message });
  }
};