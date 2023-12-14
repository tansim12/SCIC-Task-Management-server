const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const normalMiddleWare = app =>{
    app.use(cors(
        {
            origin:["http://localhost:3001","http://localhost:3002"],
            credentials:true
        }
    ))
    app.use(express.json())
    app.use(cookieParser())
}

module.exports=normalMiddleWare





