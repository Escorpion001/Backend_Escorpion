// IMPORTING THE DOTENV FILE FOR ACCESS OF ENVIRONMENT VARIABLE
import dotenv from "dotenv"

import connectDB from "./db/index.js"
// CONFIGURING THE DOTENV FILE
dotenv.config({path: './env'});
connectDB();

