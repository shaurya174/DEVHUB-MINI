import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await db.query("SELECT * FROM posts ORDER BY id DESC");
    res.render("index", { posts: posts.rows });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).send("Server Error");
  }
});

export default router;
