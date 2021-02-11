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
    const oldName = "Whatever!";
    const newName = "Yes!!!!";

    try {
      const result = await Student.updateMany(
        { name: oldName },
        { $set: { name: newName } }
      );

      if (result.nModified == 0) {
        return res.status(200).json({
          status: 200,
          message: "No students were modified",
        });
      }

      const students = await Student.find({ name: newName });

      return res.status(200).json({
        status: 200,
        message: `${result.nModified} Student(s) updated successfully`,
        data: students,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ status: 500, message: "Internal database error", error: e });
    }
  },
};
