import express from "express";
import { db } from "../db.js";
const router = express.Router();

// GET new post form
router.get("/new", (req, res) => {
  res.render("new"); // create new.ejs template
});

// POST create new post
router.post("/new", async (req, res) => {
  const { title, content } = req.body;
  try {
    await db.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2)",
      [title, content]
    );
    res.redirect("/");
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).send("Server Error");
  }
});

export default router;
