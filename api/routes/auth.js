const express = require("express");

const authRoute = express.Router();

authRoute.get("/",()=>{
    res.send("hello auth");
})

module.exports = authRoute;