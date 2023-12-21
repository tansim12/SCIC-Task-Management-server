const express = require('express');
const normalMiddleWare = require('./middleware/Normal Middle Ware/normalMiddleWare');
const globalErrorHandler = require('./utils/GlobalErrorHandler/globalErrorHandler');
require("dotenv").config()
const app = express()
const todoRoute = require("../src/route/To do/index")
const userRoute = require("../src/route/Users/index")


// normalMiddleWare 
normalMiddleWare(app)

// todoRoute 
app.use(todoRoute)


// user router 
app.use(userRoute)


app.get("/health", (req, res) => {
    res.send("Task management ");
  });

app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.url} on the server`);
    error.status = 404;
    next(error);
  });
  
  // error handling middleware
  app.use(globalErrorHandler);
  

  module.exports=app





