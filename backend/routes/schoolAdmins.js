const express = require("express");
const mongoose = require("mongoose");

const { SchoolAdmin, validateSAdmin } = require("../models/schoolAdmin");

const router = express.Router();

// get all the schoolAdmins
router.get("/", async (req, res) => {
  const schoolAdmins = await SchoolAdmin.find({});
  res.send(schoolAdmins);
});

// get schoolAdmin by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id))
    return res.status(400).send("Invalid user id");

  const schoolAdmin = await SchoolAdmin.findById(id);

  if (schoolAdmin) return res.send(schoolAdmin);
  res.status(404).send("School Admin not found");
});

// update schoolAdmin
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  req.body.user = id;
  const errorSAdmin = validateSAdmin(req.body);
  if (errorSAdmin) res.status(400).send(errorSAdmin);

  const schoolAdmin = await SchoolAdmin.findOneAndUpdate(id, req.body, {
    new: true,
  });
  if (schoolAdmin) return res.send(schoolAdmin);
  res.status(404).send("User not found");
});

module.exports = router;