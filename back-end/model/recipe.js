import mongoose from "mongoose";
import Joi from "joi";

const Recipe = mongoose.model(
  "Recipe",
  new mongoose.Schema({
    title: { type: String, required: true },
    details: String,
    recipe: String,
    imagePath: String,
    type: {
      type: String,
      required: true,
      enum: [
        "lunch",
        "snacks",
        "drinks",
        "healthy_diets",
        "breakfast",
        "appetizers",
        "dinner",
      ],
      lowercase: true,
      trim: true,
    },
    rating: { type: Number, required: false, default: 0 },
    numReviews: { type: Number, required: false, default: 0 },
  })
);

function validateRecipe(recipe) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    details: Joi.string().required(),
    recipe: Joi.string().required(),
    type: Joi.required(),
  });

  return schema.validate(recipe);
}

export { Recipe, validateRecipe };
