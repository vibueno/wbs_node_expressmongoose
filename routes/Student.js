const express = require("express");
const { getAll, create, update } = require("../controllers/Student");
const router = express.Router();

router.get("/", getAll);

router.post("/create", create);

router.put("/update", update);

module.exports = router;
