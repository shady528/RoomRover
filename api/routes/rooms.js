const express = require("express");
const {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
} = require("../controllers/room.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

const roomsRouter = express.Router();
//CREATE
roomsRouter.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
roomsRouter.put("/availability/:id", updateRoomAvailability);
roomsRouter.put("/:id", verifyAdmin, updateRoom);
//DELETE
roomsRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

roomsRouter.get("/:id", getRoom);
//GET ALL

roomsRouter.get("/", getRooms);

module.exports = roomsRouter;