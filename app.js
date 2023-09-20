const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const errorMiddleware = require("./backend/middleware/error");

app.use(express.json({ limit: "50mb" }));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  fileUpload({ limits: { fieldSize: 50 * 1024 * 1024 }, useTempFiles: true })
);
app.use(cors({ origin: "*" }));

//Route Imports
const movie = require("./backend/routes/movieRoutes.js");

app.use("/api/v1", movie);

app.use(errorMiddleware);

module.exports = app;
