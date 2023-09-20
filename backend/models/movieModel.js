const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: String,
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  cast: [
    {
      name: {
        type: String,
      },
    },
  ],
  rating: {
    type: Number,
  },
  director: {
    type: String,
  },
  description: {
    type: String,
  },
  length: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("movie", movieSchema);
