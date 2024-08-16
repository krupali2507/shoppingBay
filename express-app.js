import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./secret_cred.js";
import { internalLink } from "./src/constants/index.js";
import { dbConnection } from "./src/connections/index.js";
import {
  categoryRoute,
  customerRoute,
  productRoute,
  shoppingsRoute,
} from "./src/routes/index.js";

const expressApp = async (app) => {
  app.use(express.json()); // to allow JSON data to parse
  app.use(express.urlencoded({ extended: true })); // to encode incoming data from URL
  app.use(cors()); // to enable cross origin access
  app.use(morgan("dev"));

  dbConnection()
    .then(() => {
      console.log("Databse connected successfully!");
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    })
    .catch((error) => console.log("MongoDb connection failed!", error));

  //accessing routes
  app.use(internalLink.CUSTOMER.BASE_URL, customerRoute);
  app.use(internalLink.PRODUCT.BASE_URL, productRoute);
  app.use(internalLink.CATEGORY.BASE_URL, categoryRoute);
  app.use(internalLink.SHOPPING.BASE_URL, shoppingsRoute);
};

export default expressApp;
