//not using joi, we're doing it ourselves

const ApiError = require("../utilities/ApiError");
const path = require("path");

//1. A file has been selected for upload aka not empty
const filePayloadExists = (req, res, next) => {
  if (!req.files && !req.body.uploadedFile) {
    return next(ApiError.badRequest("No file uploaded!"));
  }
  next();
};

//2. File doesn not exceed max size (5MB)
const fileSizeLimiter = (req, res, next) => {
  const MB = 3;
  const FILE_SIZE_LIMIT = MB * 1024 * 1024; //size property is in bytes
  if (req.files) {
    const file = req.files.image;
    if (file.size > FILE_SIZE_LIMIT) {
      // return next(ApiError.badRequest("File size exceeds 5MB!"));
      const message = `${file.name.toString()} is over the file size limit of ${MB} MB}`;
      return next(ApiError.tooLarge(message));
    }
  }
  next();
};
//3. Fiel is an accepted image ext type
const fileExtLimiter = (allowedExtArray) => {
  //doing this to allow an argument
  return (req, res, next) => {
    if (req.files) {
      const file = req.files.image;
      const fileExtension = path.extname(file.name);
      const allowed = allowedExtArray.includes(fileExtension);
      if (!allowed) {
        const message =
          `Only ${allowedExtArray.toString()} files allowed.`.replaceAll(
            ",",
            ", "
          );
        return next(ApiError.cannotProcess(message));
      }
    }
    next();
  };
};

const filePolicy = {
  filePayloadExists,
  fileSizeLimiter,
  fileExtLimiter,
};

module.exports = filePolicy;
