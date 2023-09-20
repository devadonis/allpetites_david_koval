const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const ApiFetaures = require("../utils/apiFeatures");

const Movie = require("../models/movieModel");

/* ===============================================================
        Create Movie (/api/v1/create/movie) (req : POST)
   =============================================================== */
exports.createMovie = catchAsyncError(async (req, res, next) => {
  const { name, year, rating, director, description, cast, length } = req.body;
  if (!name | !year | !rating | !director | !description | !cast | !length) {
    return next(new ErrorHandler("All field is required", 401));
  }

  await Movie.create({
    name,
    year,
    rating,
    director,
    description,
    cast,
    length,
  });
  res.status(200).json({
    success: true,
    message: "Movie Create Successfully",
  });
});

/* ===============================================================
        All Movies (/api/v1/all/movies) (req : Get)
   =============================================================== */
exports.getAllMovies = catchAsyncError(async (req, res, next) => {
  const apifeatures = new ApiFetaures(Movie.find(), req.query)
    .search()
    .filter();
  const movies = await apifeatures.query;
  res.status(200).json({
    success: true,
    movies,
  });
});

/* ===============================================================
        Single Movie (/api/v1/movie/:id) (req : Get)
   =============================================================== */
exports.getSingleMovie = catchAsyncError(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    return next(new ErrorHandler("Movie Not Found", 404));
  }
  res.status(200).json({
    success: true,
    movie,
  });
});
