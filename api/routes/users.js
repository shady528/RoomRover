const express = require("express");

const userRoute = express.Router();

userRoute.get("/",()=>{
    res.send("hello users");
})

module.exports = userRoute;