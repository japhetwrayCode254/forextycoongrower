import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors"

import userRoute from "./middlewares/userMid.js"
import signalRoute from "./middlewares/signalMid.js"

const app=express();
dotenv.config();

mongoose.set('strictQuery', true);

const dbconnection=async()=>{
    try {
       await  mongoose.connect(process.env.MONGO_URL)
        console.log('Db connected')
    } catch (error) {
        console.log(error)
    }
}
app.use(cors({
    origin:"http://localhost:3000",credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/user",userRoute);
app.use("/api/signal",signalRoute);


app.listen(8085,()=>{

    console.log('backend server is running at port 8085...')
    dbconnection()
})