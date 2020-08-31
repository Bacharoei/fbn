const express = require("express");
const router = express.Router();

const { GetUserProfile } = require("../controller/profile");

// @route    GET profile/me
// @desc     Get user profile Route
// @access   Private
router.get("/me", GetUserProfile);

module.exports = router;
