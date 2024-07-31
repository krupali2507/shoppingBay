import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const mongoURL = process.env.mongoURL;
export const DB_NAME = process.env.DB_NAME;
export const APP_SECRET = process.env.APP_SECRET;
