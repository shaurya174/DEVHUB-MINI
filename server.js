import express from "express";
import dotenv from "dotenv";

import homeRoutes from "./routes/home.js";
import newPostRoutes from "./routes/newPost.js";
import editPostRoutes from "./routes/editPost.js";
import deletePostRoutes from "./routes/deletePost.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", homeRoutes);
app.use("/", newPostRoutes);
app.use("/", editPostRoutes);
app.use("/", deletePostRoutes);

app.listen(port, () => console.log("APP IS LIVE"));