import { Server } from "http";
import app from "./app";
import config from "./config";
import mongoose from "mongoose";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("✅ MongoDB connected successfully");

    //here config.port comes from index.js file
    server = app.listen(config.port, () => {
      console.log(`The Portfolio app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();

//for Asynchronous code
process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection is detected,shutting down...", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

//for synchronous code
process.on("uncaughtException", (err) => {
  console.log("unhandledException is detected,shutting down...", err);
  process.exit(1);
});
