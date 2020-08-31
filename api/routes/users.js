const express = require("express");
const router = express.Router();

const { GetAllUsers, CreateUser } = require("../controller/users");

// @route    GET users
// @desc     Get all users Route
// @access   Public
router.get("/", GetAllUsers);
router.post("/", CreateUser);

module.exports = router;
