import express from "express";
import expressApp from "./express-app.js";
import { PORT } from "./secret_cred.js";

const executeMainServer = async () => {
  const app = express();
  await expressApp(app);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

executeMainServer();
