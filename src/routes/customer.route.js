import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("HEllo from customer!");
});

export default router;
