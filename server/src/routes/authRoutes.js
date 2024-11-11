// AUTH ROUTES FILE
// Import express and router
const express = require("express");
const router = express.Router();

// Import auth modules
const AuthController = require("../controllers/authController");
const AuthPolicy = require("../policies/authPolicy");
const VerifyAuth = require("../middleware/verifyAuth");

// Setup routes within export function
module.exports = () => {
  // AUTH: TEST (GET ALL) ROUTE: /api/auth/users
  router.get("/users", AuthController.listUsers);

  // router.get("/users", VerifyAuth, AuthController.listUsers)

  // AUTH: REGISTER (POST) Route: /api/auth/register
  router.post("/register", AuthPolicy.validateAuth, AuthController.register);

  // AUTH: LOGIN (POST) Route: /api/auth/login
  router.post("/login", AuthPolicy.validateAuth, AuthController.login);

  return router;
};
