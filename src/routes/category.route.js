import { Router } from "express";
import { categoryApi, productApi } from "../api/index.js";

const router = Router();

router
  .get("/", categoryApi.getCategories)
  .get("/:id", productApi.productsByCategory)
  .post("/create", categoryApi.createCategory);

export default router;
