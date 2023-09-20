const express = require("express");
const {
  createMovie,
  getAllMovies,
  getSingleMovie,
} = require("../controllers/movieControllers");
const router = express.Router();

router.route("/create/movie").post(createMovie);
router.route("/all/movies").get(getAllMovies);
router.route("/movie/:id").get(getSingleMovie);

module.exports = router;
