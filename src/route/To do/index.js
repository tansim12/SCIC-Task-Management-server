const express = require('express');
const postTodos = require('../../api/To Do method/postTodos');
const getAllTodo = require('../../api/To Do method/getAllTodo');
const updateTodo = require('../../api/To Do method/updateTodo');
const router = express.Router()

router.post('/todo', postTodos )
router.get('/todo', getAllTodo )
router.put('/todo/:_id', updateTodo )
module.exports=router