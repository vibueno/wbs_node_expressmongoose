const Student = require("../models/Student");

module.exports = {
  getAll: async (req, res) => {
    try {
      const students = await Student.find({});
      res.status(200).json({
        status: 200,
        message: "Students retrieved successfully",
        data: students,
      });
    } catch (e) {
      res
        .status(500)
        .json({ status: 500, message: "Internal database error", error: e });
    }
  },

  create: async (req, res) => {
    const { name, lastname, email } = req.body;

    try {
      const student = await Student.create({
        name,
        lastname,
        email,
      });
      res.status(200).json({
        status: 200,
        message: "Student created successfully",
        data: student,
      });
    } catch (e) {
      res
        .status(500)
        .json({ status: 500, message: "Internal database error", error: e });
    }
  },

  update: async (req, res) => {
    try {
      const result = await Student.updateMany(
        { name: "Yo!" },
        { $set: { name: "Tu!" } }
      );

      const students = await Student.find({});

      res.status(200).json({
        status: 200,
        message: "Students updated successfully",
        data: students,
      });
    } catch (e) {
      res
        .status(500)
        .json({ status: 500, message: "Internal database error", error: e });
    }
  },
};
