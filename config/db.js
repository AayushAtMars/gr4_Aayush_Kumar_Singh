import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGO_URI


 export const dbConnect= async()=>{
    await mongoose.connect(url)
    .then(()=> console.log("DB Ka Connection Succesful"))
    .catch((err)=> console.error("MongoDB connection error:", err));
    // process.exit(1);
}
