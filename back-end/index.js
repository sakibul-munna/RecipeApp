import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import recipes from "./routes/recipes.js";
import homeRoutes from "./routes/home.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";

const url = "mongodb://0.0.0.0:27017/recipe_app";

mongoose
  .connect(url, {})
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("Could not connect to mongodb", err));

const app = express();
app.use(express.json());
app.use(express.static("assets"));
app.use(cors());

app.use("/api/recipes", recipes);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/", homeRoutes);

const port = process.env.PORT || 3030;
app.listen(3030, () => console.log(`listening on port ${port}`));
