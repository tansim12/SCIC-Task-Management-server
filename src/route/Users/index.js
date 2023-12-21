const express = require("express");
const postUserData = require("../../api/User Method/postUserInfo");
const router = express.Router();

router.post("/users", postUserData);


module.exports = router;
