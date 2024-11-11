module.exports = {
  //A. PORT ENVS
  port: process.env.PORT,
  //B. DATABASE ENVS
  db: {
    serviceAccountKey: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET_URL,
  },
  //C. AUTH ENVS
  authentication: {
    jwtSecret: process.env.JWT_SECRET,
  },

  //CORS
  corsAllowedOptions: [
    process.env.CORS_WHITELIST_1,
    process.env.CORS_WHITELIST_2,
  ],
};
