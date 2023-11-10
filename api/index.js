const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();

const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const hotelRoute = require("./routes/hotels.js");
const roomRoute = require("./routes/rooms.js");

const connectDB = require("./config/db");
// connect database
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.get("/users", (req, res) => {
    res.send("hello first request");
})


app.get("/", (req, res) => {
    res.send("Server is running");
})

app.listen(5000, () => {
    console.log("Connected to backend.")
})