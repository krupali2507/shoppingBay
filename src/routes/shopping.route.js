import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("HEllo From shopping!");
});

export default router;
