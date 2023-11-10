const express = require("express");

const {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
} = require("../controllers/hotel.js");

const { verifyAdmin } = require("../utils/verifyToken.js");
const hotelRouter = express.Router();

//CREATE
hotelRouter.post("/", verifyAdmin, createHotel);

//UPDATE
hotelRouter.put("/:id", verifyAdmin, updateHotel);
//DELETE
hotelRouter.delete("/:id", verifyAdmin, deleteHotel);
//GET

hotelRouter.get("/find/:id", getHotel);
//GET ALL

hotelRouter.get("/", getHotels);
hotelRouter.get("/countByCity", countByCity);
hotelRouter.get("/countByType", countByType);
hotelRouter.get("/room/:id", getHotelRooms);

module.exports = hotelRouter;