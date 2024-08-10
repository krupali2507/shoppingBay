import { Router } from "express";
import { productApi } from "../api/index.js";

const router = Router();

router
  .get("/", productApi.getProduct)
  .post("/create", productApi.createProduct)
  .get("/:type", productApi.productsByCategory);

export default router;
