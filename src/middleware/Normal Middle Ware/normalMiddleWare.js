const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const normalMiddleWare = (app) => {
  app.use(
    cors({
      origin: [
        "https://ubiquitous-kleicha-f89f00.netlify.app",
        "http://localhost:5173",
        "http://localhost:5174",
      ],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = normalMiddleWare;
