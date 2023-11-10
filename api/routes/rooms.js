const express = require("express");

const roomRoute = express.Router();

roomRoute.get("/",()=>{
    res.send("hello rooms");
})

module.exports = roomRoute;