const express = require("express");
const router = express.Router();
const {
  getAllActivities,
  getActivity,
  postActivity,
  putActivity,
  deleteActivity,
} = require("./activities.controller");

router.get("/", getAllActivities);
router.get("/:id", getActivity);
router.post("/", postActivity);
router.put("/:id", putActivity);
router.delete("/:id", deleteActivity);

module.exports = router;
