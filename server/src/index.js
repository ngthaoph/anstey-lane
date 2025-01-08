// IMPORTED SERVER MODULES
// External modules
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const helmet = require("helmet");

// Local modules
const config = require("./config/config");
const ApiError = require("./utilities/ApiError");
const apiErrorHandler = require("./middleware/apiErrorHandler");
const routes = require("./routes/routes");
const { db } = require("./config/db");
const corsOptions = require("./config/corsOptions");
const debugStartup = require("debug")("app:startup");

// Initialise application using express
const app = express();

// EXPRESS MIDDLEWARE:
// HTTP Header-setter security & CORS
app.use(helmet());
app.use(cors(corsOptions));
debugStartup("Helmet & CORS Pre-Flight requests enabled");

// POST request parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({ createParentPath: true }));
debugStartup("POST parsing middleware enabled for JSON/URL/Files");

// Cycle our requests through morgan to track our queries
app.use(morgan("dev"));

// Main routing middleware function
// *NEW* ROOT ROUTE:
app.get("/", (req, res) => {
  res.send("Welcome to Timbertop United API 👩‍💻");
});
// ROUTES PATH: http://localhost:5000/api/
app.use("/api", routes());

// Not Found Route
app.use((req, res, next) => {
  next(ApiError.notFound());
});

// Error Handler Middleware
app.use(apiErrorHandler);

// SETTING PORT IN DEV (tests db on boot)
if (config.env === "development") {
  // DB Ping function (dev testing)
  db.listCollections()
    .then((collections) => {
      debugStartup("Connected to Cloud Firestore");
      for (let collection of collections) {
        debugStartup(`DB collection: ${collection.id}`);
      }
    })
    .then(() => {
      app.listen(config.port, () =>
        console.log(`Development Server is running on port: ${config.port}`)
      );
    });

  // SETTING PORT IN PREVIEW/PROD
} else {
  app.listen(config.port, () =>
    console.log(`Production Server is running on port: ${config.port}`)
  );
}
