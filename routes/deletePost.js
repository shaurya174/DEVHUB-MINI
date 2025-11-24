import express from "express";
import { db } from "../db.js";
const router = express.Router();

// POST delete post
router.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await db.query("DELETE FROM posts WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).send("Server Error");
  }
});

export default router;
