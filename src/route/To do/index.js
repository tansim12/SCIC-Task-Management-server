const express = require('express');
const postTodos = require('../../api/To Do method/postTodos');
const getAllTodo = require('../../api/To Do method/getAllTodo');
const router = express.Router()

router.post('/todo', postTodos )
router.get('/todo', getAllTodo )
module.exports=router