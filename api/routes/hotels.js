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
const hotelRoute = express.Router();

//CREATE
hotelRoute.post("/", verifyAdmin, createHotel);

//UPDATE
hotelRoute.put("/:id", verifyAdmin, updateHotel);
//DELETE
hotelRoute.delete("/:id", verifyAdmin, deleteHotel);
//GET

hotelRoute.get("/find/:id", getHotel);
//GET ALL

hotelRoute.get("/", getHotels);
hotelRoute.get("/countByCity", countByCity);
hotelRoute.get("/countByType", countByType);
hotelRoute.get("/room/:id", getHotelRooms);

module.exports = hotelRoute;