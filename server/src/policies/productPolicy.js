// Import Joi Validation module
const Joi = require("joi");
const ApiError = require("../utilities/ApiError");
const debugJoi = require("debug")("app:joi");

module.exports = {
  // [1] POST Validation
  validateProduct(req, res, next) {
    console.log(req.body);
    const schema = Joi.object({
      name: Joi.string().required(),

      origin: Joi.string().required(),
      price: Joi.number().required(),
      tasting: Joi.string().required(),
      base: Joi.string().required(),
      image: Joi.any(),
      uploadedFile: Joi.string(),
    });

    // Return one of two values
    const { error, value } = schema.validate(req.body);

    // ON VALIDATION ERROR: We call Error Middleware & Pass Bad Request with Dynamic Validation Error Message
    if (error) {
      debugJoi(error);
      switch (error.details[0].context.key) {
        case "name":
          next(
            ApiError.badRequest("You must provide a valid name for the product")
          );
          break;
        case "origin":
          next(
            ApiError.badRequest(
              "You must provide a valid origin for the product"
            )
          );
          break;

        case "base":
          next(
            ApiError.badRequest("You must provide a valid base for the product")
          );
          break;

        case "tasting":
          next(
            ApiError.badRequest(
              "You must provide a valid product information including tasting"
            )
          );
          break;

        case "price":
          next(
            ApiError.badRequest(
              "You must provide valid pricing for the product"
            )
          );
          break;

        case "image":
        case "uploadedFile":
          next(
            ApiError.badRequest(
              "The existing image URL or path are not in a valid format - please re-upload the image"
            )
          );
          break;

        default:
          next(
            ApiError.badRequest(
              "Invalid Form Information - please check form information and submit again"
            )
          );
      }

      // ON SUCCSSS: We pass to next middleware
    } else {
      next();
    }
  },
};
