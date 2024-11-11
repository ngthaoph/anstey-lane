const ApiError = require("../utilities/ApiError");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
//401 = NO PRIVILEDGES
const auth = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return ApiError.denyAccess("No token prodived");
  } else {
    //token in header - must test if valid token
    token.subString(7, token.length); //remove "bearer"
  }
  try {
    //test the token in header is valid (bad secret or expired)
    const decoded = jwt.verify(token, config.authentication.jwtSecret); //the token you verify and what sercret the server knows
    req.user = decoded; //return either true value
    console.log(`user verified": ${req.user.username}`); //return either true value
    next();
  } catch (ex) {
    console.log(ex);
    return next(ApiError.denyAccess("Invalid token"));
  }
};

// Check for a 403 error = INSUFFICIENT PRIVS
const admin = (req, res, next) => {
  // 403 ERROR: Forbidden check
  if (!req.user.isAdmin) {
    console.log(req.user.username);
    return next(ApiError.forbidden("Insufficient privledges"));
  }

  // SUCCESS: User is admin
  console.log(`Admin access granted: ${req.user.username}`);
  next();
};

const verifyAuth = {
  auth,
  admin,
};

module.exports = verifyAuth;
