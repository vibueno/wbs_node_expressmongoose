const express = require("express");
const { getAll, create } = require("../controllers/Student");
const router = express.Router();

router.get("/", getAll);

router.post("/create", create);

module.exports = router;
