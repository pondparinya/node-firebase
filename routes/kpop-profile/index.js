const express = require("express");
const router = express.Router();
const validate = require("./validate");

// get all user
router.get("/getAll", validate.getAll);
router.get("/getProfile/:name", validate.getProfileById);

module.exports = router;
