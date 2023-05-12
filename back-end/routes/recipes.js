import express from "express";
import multer from "multer";
import { Recipe, validateRecipe as validate } from "../model/recipe.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    const timestamp = Date.now();
    const newFilename = `${originalName.split(".")[0]}-${timestamp}.jpg`;
    cb(null, newFilename);
  },
});
const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.send(recipes);
});

router.get("/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    res.status(404).send("The recipe does not exist");
  } else {
    res.status(200).send(recipe);
  }
});

router.post("/", auth, upload.single("image"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let recipe = new Recipe({
    title: req.body.title,
    details: req.body.details,
    recipe: req.body.recipe,
    imagePath: req.file.filename,
    type: req.body.type,
  });

  recipe
    .validate()
    .then(async () => {
      let savedRecipe = await recipe.save();
      if (savedRecipe._id) res.status(200).send(savedRecipe);
      else res.status(400).send("Couldn't save recipe!");
    })
    .catch((err) => {
      return res.status(400).send(err.message);
    });
});

router.put("/:id", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        details: req.body.details,
        recipe: req.body.recipe,
        imagePath: req.body.imagePath,
        type: req.body.type,
      },
      { new: true, runValidators: true }
    );

    if (!recipe) return res.status(404).send("The recipe does not exist");

    return res.send(recipe);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const recipe = await Recipe.findByIdAndDelete(req.params.id);

  if (!recipe) return res.status(404).send("The recipe does not exist");

  return res.send(recipe);
});

export default router;
