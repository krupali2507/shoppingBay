import mongoose from "mongoose";
import { mongoURL, DB_NAME } from "../../secret_cred.js";
console.log(`${mongoURL} / ${DB_NAME}`);

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(`${mongoURL}/${DB_NAME}`);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("🚀 ~ dbConnection ~ error:", error);
    process.exit(1);
  }
};

export default dbConnection;
