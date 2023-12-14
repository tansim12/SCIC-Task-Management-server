const express = require('express');
const userPost = require('../../api/User Contoler/postUser');
const router = express.Router()

router.post("/all-users" , userPost)

module.exports=router


