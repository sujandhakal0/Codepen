const express = require("express");
const {
  saveProgram,
  getProgram,
  getAllPrograms,
  deleteProgram,
} = require("../controller/saveController");

const router = express.Router();

router.post("/saveProgram", saveProgram);
router.post("/getProgram", getProgram);
router.get("/getProjects", getAllPrograms);
router.delete("/deleteProgram/:projectId", deleteProgram);

module.exports = router;
