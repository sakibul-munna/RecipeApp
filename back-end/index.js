import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import recipes from "./routes/recipes.js";
import homeRoutes from "./routes/home.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";

const url = "mongodb://0.0.0.0:27017/recipe_app";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose
  .connect(url, {})
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("Could not connect to mongodb", err));

const app = express();
app.use(express.json());
app.use(express.static(join(__dirname, "uploads")));
app.use(cors());

app.use("/api/recipes", recipes);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/", homeRoutes);

const port = process.env.PORT || 3030;
app.listen(3030, () => console.log(`listening on port ${port}`));
