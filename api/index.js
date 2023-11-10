const express = require("express"); 
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
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

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/hotels",hotelRoute);
app.use("/api/rooms",roomRoute);

app.get("/users", (req,res)=>{
    res.send("hello first request");
})


app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.listen(5000,()=>{
    console.log("Connected to backend.")
})