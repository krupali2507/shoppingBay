import express from "express";
import cors from "cors";
import morgan from "morgan";
import { internalLink } from "./src/constants/index.js";
import { dbConnection } from "./src/connections/index.js";
import {
  customerRoute,
  productRoute,
  shoppingsRoute,
} from "./src/routes/index.js";

const expressApp = async (app) => {
  app.use(express.json()); // to allow JSOn data to parse
  app.use(cors()); // to enable cross origin access
  app.use(morgan("dev"));

  await dbConnection();

  //accessing routes
  app.use(internalLink.CUSTOMER.BASE_URL, customerRoute);
  app.use(internalLink.PRODUCT.BASE_URL, productRoute);
  app.use(internalLink.SHOPPING.BASE_URL, shoppingsRoute);
};

export default expressApp;
