import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const  connectDB = async ()=>{
    try{
    const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n mongodb connected !! DB host: ${connection_instance.connection.host}`);
    }catch(error){
        console.log(`Mongodb connection failed with error `,error);
        process.exit(1);
    }
}
export default connectDB;