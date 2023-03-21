import express from "express"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import mentorroute from "./routes/mentor.js"
import studentroute from "./routes/student.js"
dotenv.config();
const app=express();
 const connect = () => {
    mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  mongoose.set('strictQuery', false))
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
  };
  
  
app.get("/",(req,res)=>{
  res.send("hello world")
})
app.use(express.json());
app.use("/api/mentor",mentorroute)
app.use("/api/student",studentroute)


app.listen(4000,async()=>{
    await connect();
    console.log("port is conected")
})