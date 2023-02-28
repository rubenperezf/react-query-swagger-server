import express from "express";
import {
  createJoke,
  deleteJoke,
  getJokes,
  updateJoke,
} from "../controllers/jokes.js";

const router = express.Router();

router.get("/jokes", getJokes);

router.post("/jokes", createJoke);

router.delete("/jokes/:id", deleteJoke);

router.put("/jokes/:id", updateJoke);

export default router;
