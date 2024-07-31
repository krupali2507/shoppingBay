import express from "express";
import expressApp from "./express-app.js";

const executeMainServer = async () => {
  const app = express();
  await expressApp(app);
};

executeMainServer();
