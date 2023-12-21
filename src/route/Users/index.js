const express = require("express");
const postUserData = require("../../api/User Method/postUserInfo");
const getAllUser = require("../../api/User Method/getAllUser");
const router = express.Router();

router.post("/users", postUserData);
router.get("/users", getAllUser);


module.exports = router;
