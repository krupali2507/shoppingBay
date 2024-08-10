import { Router } from "express";
import { userAuth } from "../middlewares/index.js";
import { customerApi } from "../api/index.js";

const router = Router();

router.post("/signup", customerApi.signup);
router.post("/login", customerApi.login);
router.get("/profile", userAuth, customerApi.getProfile);
router.get("/shoping-details", userAuth, customerApi.getShopingDetails);
router.post("/address", userAuth, customerApi.addNewAddress);
router.post("/wishlist", userAuth, customerApi.getWishList);

export default router;
