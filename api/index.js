import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import locationsRoute from "./routes/locations.js"
import appointmentsRoute from "./routes/appointments.js"
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    } catch (error) {
        throw error;
    }
};


mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!");
})

//middlewares
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/locations", locationsRoute);
app.use("/api/appointments", appointmentsRoute);


app.listen(8800, () => {
    connect()
    console.log("Connected to backend.");
})