const express = require("express");
const router = express.Router();
const {
  getAllTeams,
  getTeam,
  postTeam,
  putTeam,
  deleteTeam,
} = require("./teams.controller");

router.get("/", getAllTeams);
router.get("/:id", getTeam);
router.post("/", postTeam);
router.put("/:id", putTeam);
router.delete("/:id", deleteTeam);

module.exports = router;
