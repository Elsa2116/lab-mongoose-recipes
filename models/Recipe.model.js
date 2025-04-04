// Import Mongoose
const mongoose = require('mongoose');

// Define the Recipe Schema
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
  ingredients: [String],
  cuisine: { type: String, required: true },
  dishType: { type: String, enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other'] },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
  duration: { type: Number, min: 0 },
  creator: { type: String },
  created: { type: Date, default: Date.now }
});

// Create the Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the model
module.exports = Recipe;

