const Student = require("../models/Student");

module.exports = {
  getAll: async (req, res) => {
    const students = await Student.find({});
    res.json(students);
  },

  create: async (req, res) => {
    const creation = await Student.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
    });

    res.status(200).json(creation);
  },

  update: async (req, res) => {
    const modification = await Student.updateMany(
      { name: "Yo!" },
      { $set: { name: "Tu!" } }
    );

    const students = await Student.find({});
    res.status(200).json(students);
  },
};
