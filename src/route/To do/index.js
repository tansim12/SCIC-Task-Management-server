const express = require('express');
const postTodos = require('../../api/To Do method/postTodos');
const router = express.Router()

router.post('/todo', postTodos )
module.exports=router