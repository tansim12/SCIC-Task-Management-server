const express = require('express');
const postTodos = require('../../api/To Do method/postTodos');
const getAllTodo = require('../../api/To Do method/getAllTodo');
const updateTodo = require('../../api/To Do method/updateTodo');
const getOneTodo = require('../../api/To Do method/getOneTodo');
const deleteOneTodo = require('../../api/To Do method/deleteOneTodo');
const router = express.Router()

router.post('/todo', postTodos )
router.get('/todo', getAllTodo )
router.get('/todo/:_id', getOneTodo )
router.delete('/todo/:_id', deleteOneTodo )
router.put('/todo/:_id', updateTodo )
module.exports=router