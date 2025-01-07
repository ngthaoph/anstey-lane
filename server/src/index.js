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
// if (config.env === "development") {
//   // DB Ping function (dev testing)
//   db.listCollections()
//     .then((collections) => {
//       debugStartup("Connected to Cloud Firestore");
//       for (let collection of collections) {
//         debugStartup(`DB collection: ${collection.id}`);
//       }
//     })
//     .then(() => {
//       app.listen(config.port, () =>
//         console.log(`Development Server is running on port: ${config.port}`)
//       );
//     });

//   // SETTING PORT IN PREVIEW/PROD
// } else {
//   app.listen(config.port, () =>
//     console.log(`Production Server is running on port: ${config.port}`)
//   );
// }

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
      // Use dynamic port for development, default to 5005
      const port = process.env.PORT || 5005;
      app.listen(port, () =>
        console.log(`Development Server is running on port: ${port}`)
      );
    });
} else {
  // In production, use dynamic port set by Render
  const port = process.env.PORT || 5005; // Fallback to 5005 for local dev/testing
  app.listen(port, () =>
    console.log(`Production Server is running on port: ${port}`)
  );
}
