const mongoose = require("mongoose");

// const filterDataSchema = new mongoose.Schema({
//   name: String,
//   value: [String],
// });

// const presetFilterSchema = new mongoose.Schema({
//   _id: String,
//   name: String,
//   filters: filterDataSchema,
// });

const categorySchema = new mongoose.Schema({
  _id: String,
  name: String,
  categoryId: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  filters: {
    type: [],
    required: false,
  },
});

module.exports = mongoose.model("Category", categorySchema);
