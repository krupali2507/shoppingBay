import { Router } from "express";
import { productApi } from "../api/index.js";
import { userAuth } from "../middlewares/index.js";

const router = Router();

router
  .get("/", productApi.getProduct)
  .post("/create", productApi.createProduct)
  .post("/ids", productApi.getProducts)
  .put("/wishlist", userAuth, productApi.addProductToWishList)
  .delete("/wishlist/:id", userAuth, productApi.removeProductFromWishList)
  .put("/cart", userAuth, productApi.addProductToCart)
  .delete("/cart/:id", userAuth, productApi.removeProdcutFromCart);

export default router;
