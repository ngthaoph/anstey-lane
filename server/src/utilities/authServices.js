const { db } = require("../config/db");
const config = require("../config/config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

module.exports = {
  async findUser(email) {
    // Store the document query in variable & call GET method
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    // SUCCESS: Push object properties to array and send to client
    let users = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        username: doc.data().username,
        email: doc.data().email,
        password: doc.data().password,
        isAdmin: doc.data().isAdmin,
      });
    });

    // iii. search the user email against our user array
    const userMatch = users.filter((user) => email === user.email);
    return userMatch;
  },

  async hashPassword(password) {
    // ENCRYPT the password!
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  },

  async comparePassword(user, password) {
    const hashPassword = user[0].password;
    console.log("Hash: ", hashPassword, "password: ", password);
    const passwordMatch = await bcrypt.compare(password, hashPassword);

    return passwordMatch;
  },

  async userDetailsToJSON(id) {
    const usersRef = db.collection("users");
    const user = await usersRef.doc(id).get();
    const userJSON = _.omit({ id: id, ...user.data() }, "password");
    console.log(userJSON);
    return userJSON;
  },

  jwtSignUser(user) {
    const payload = user;
    const secret = config.authentication.jwtSecret;
    const tokenExpireTime = 60 * 60 * 24; // 1 day :)

    const token = jwt.sign(payload, secret, { expiresIn: tokenExpireTime });
    console.log(token);
    return token;
  },
};
