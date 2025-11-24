import express from "express";
import { db } from "../db.js";
const router = express.Router();

// GET edit form
router.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (!post.rows[0]) return res.status(404).send("Post not found");
    res.render("edit", { post: post.rows[0] });
  } catch (err) {
    console.error("Error fetching post for edit:", err);
    res.status(500).send("Server Error");
  }
});

// POST update post
router.post("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  try {
    await db.query(
      "UPDATE posts SET title = $1, content = $2 WHERE id = $3",
      [title, content, id]
    );
    res.redirect("/");
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).send("Server Error");
  }
});

export default router;
