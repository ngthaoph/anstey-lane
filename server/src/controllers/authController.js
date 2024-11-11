// Import our Database Configuration (allows us to query database)
const {
  findUser,
  hashPassword,
  comparePassword,
  userDetailsToJSON,
  jwtSignUser,
} = require("../utilities/authServices");
const ApiError = require("../utilities/ApiError");
const { db } = require("../config/db");

module.exports = {
  // [1] GET ALL Users
  async listUsers(req, res, next) {
    // Store the document query in variable & call GET method
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    // [400 ERROR] Check for User Asking for Non-Existent Documents
    if (snapshot.empty) {
      return next(
        ApiError.badRequest("The users you were looking for do not exist")
      );
    }

    // SUCCESS: Push object properties to array and send to client
    let users = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        username: doc.data().username,
        email: doc.data().email,
        isAdmin: doc.data().isAdmin,
      });
    });

    res.send(users);
  },

  // [2] REGISTER USER
  async register(req, res, next) {
    try {
      // a. Store form data in variables
      const { username, email, password } = req.body;
      console.log(req.body);

      // b. Validation - Block non-unique emails submitted
      const userMatch = await findUser(email);
      if (userMatch.length > 0) {
        return next(ApiError.badRequest("This email is already in use"));
      }

      // c. Save the user to db
      const usersRef = db.collection("users");
      const response = await usersRef.add({
        username: username,
        email: email,
        password: await hashPassword(password),
        isAdmin: true,
      });
      console.log(`User registration successful - User ID: ${response.id}`);

      // d. Mint the jwt with user data
      const userJSON = await userDetailsToJSON(response.id);

      // e. Send the response with the token!
      res.send({
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      return next(
        ApiError.internal("Your user profile could not be registered", err)
      );
    }
  },

  // [3] LOGIN USER
  async login(req, res, next) {
    try {
      // a. Store form data into vars
      const { email, password } = req.body;

      // b. Validation (find the matching email)
      const userMatch = await findUser(email);
      if (userMatch.length === 0) {
        return next(
          ApiError.badRequest("Your credentials are not valid (DEBUG: EMAIL)")
        );
      }

      // c. *NEW* Authentication - Block NON-matching passwords
      const passwordMatch = await comparePassword(userMatch, password);
      if (!passwordMatch) {
        return next(
          ApiError.badRequest("Your credentials are not valid (DEBUG: PWD)")
        );
      }
      console.log(`SUCCESS - User: ${userMatch[0].username} is logged in`);

      // d. Mint the jwt with user data
      const userJSON = await userDetailsToJSON(userMatch[0].id);

      // e. Send the response with the token!
      res.send({
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      return next(
        ApiError.internal(
          "Your user profile cannot be logged into at this time :(",
          err
        )
      );
    }
  },
};
