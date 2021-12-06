const express = require("express");
const {
  CreateAttendanceCrontroller,
} = require("../controllers/AttentController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Los datos tomados son los siguientes" });
});

router.post("/", CreateAttendanceCrontroller);

module.exports = router;
