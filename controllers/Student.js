const Student = require("../models/Student");

module.exports = {
  create: async (req, res) => {
    const creation = await Student.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
    });

    res.status(200).send("document inserted");
  },
  getAll: async (req, res) => {
    const dbRes = await Student.find({});
    res.json(dbRes);
  },
};
