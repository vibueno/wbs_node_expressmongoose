const Student = require("../models/Student");

module.exports = {
  getAll: async (req, res) => {
    const dbRes = await Student.find({});
    res.json(dbRes);
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
      { name: "John" },
      { $set: { name: "Lola" } }
    );

    res.status(200).send(modification);
  },
};
