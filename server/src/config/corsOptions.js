const config = require("./config");

const whitelist = config.corsAllowedOptions;
console.log(whitelist);

//COMPARING THE REACT REQUEST URL WITH OUR WHITLIST
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // FOR GOOD REQUESTS
      callback(null, true);
    } else {
      // FOR BAD REQUESTS (not on whitelist)
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
