import { Router } from "express";
import { customerApi } from "../api/index.js";

const router = Router();

router.post("/signup", customerApi.signup);
router.post("/login", customerApi.login);
router.post("/profile", customerApi.getProfile);
router.post("/shoping-details", customerApi.getShopingDetails);
router.post("/address", customerApi.addNewAddress);
router.post("/wishlist", customerApi.getWishList);

export default router;
