import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("HEllo deom product!");
});

export default router;
