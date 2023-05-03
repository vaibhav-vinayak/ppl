import { Router } from "express";
import jwt from "jsonwebtoken";

const authRoutes = Router();

authRoutes.post("/login", (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  setTimeout(() => {
    res.json({ token });
  }, 3000);
});

authRoutes.post("/signup", (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  res.json({ token });
});

export default authRoutes;
