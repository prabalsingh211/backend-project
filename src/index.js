// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

// APPROACH 1:

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on PORT ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ".error);
//     throw error;
//   }
// })();

// APPROACH 2

connectDB();
