const express = require("express");
const router = express.Router();
const gateways = require("./kpop_profile");

// get all user
router.get("/getAll", gateways.HTTP_getAll);

module.exports = router;
