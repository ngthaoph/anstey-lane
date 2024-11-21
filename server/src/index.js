// Import modules
const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const fileUpload = require("express-fileupload");

// Testing import
const { dbPing } = require("./config/db");

// Import custom middleware
const apiErrorHandler = require("./middleware/apiErrorHandler");
const ApiError = require("./utilities/ApiError");

// Import routes + envs
const routes = require("./routes/routes");
const config = require("./config/config");

// Debug logs
const debugStartup = require("debug")("app:startup");

// Init express app instance
const app = express();

// Access express middleware
debugStartup("Parsing middleware for JSON & urlencoding ...");

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({ createParentPath: true }));

// Dev request middleware
app.use(morgan("dev"));

// Test home route
app.use("/api", routes());

// Not found route (404)
app.use((req, res, next) => {
  next(ApiError.notFound());
});

// Call the Error Handler middlware
app.use(apiErrorHandler);

// PORT listener
// TESTING/DEVELOPMENT
// Ping DB & Set Port
if (config.env === "development") {
  // SETTING: DEVELOPMENT
  dbPing.then(() => {
    app.listen(config.port, () =>
      console.log(`Development Server is running on port: ${config.port}`)
    );
  });
} else {
  // SETTING: PREVIEW/PRODUCTION
  app.listen(config.port, () =>
    console.log(`Production Server is running on port: ${config.port}`)
  );
}
