const Joi = require("joi");
const ApiError = require("../utilities/ApiError.js");

module.exports = {
  validateAuth(req, res, next) {
    console.log(req.body);
    //1.SCHEMA: what should the data be structured as
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        // .pattern(new RegExp("^[a-zA-Z0-9]{3, 30}$"))
        .required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      //2. IF ERROR: what error should come back?
      console.log(error.details[0].context);
      console.log(error.details[0].message);
      switch (error.details[0].context.key) {
        case "username":
          next(ApiError.badRequest("Your username is not valid"));
          break;

        case "email":
          next(ApiError.badRequest(error.details[0].message));
          break;
        case "password":
          next(ApiError.badRequest("your password is not valid"));
          break;
        default:
          next(ApiError.badRequest("Validation failed"));
      }

      next(ApiError.badRequest("You made an error"));
    } else {
      //3.IF SUCCESSFL: send to next middleware
      next();
    }
  },
};
