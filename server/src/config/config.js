module.exports = {
  //A. PORT ENVS
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  //B. DATABASE ENVS
  db: {
    google_account_credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,

    // type: process.env.TYPE,
    // project_id: process.env.PROJECT_ID,
    // private_key_id: process.env.PRIVATE_KEY_ID,
    // private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    // client_email: process.env.CLIENT_EMAIL,
    // client_id: process.env.CLIENT_ID,
    // auth_uri: process.env.AUTH_URI,
    // token_uri: process.env.TOKEN_URI,
    // auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    // client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    // universe_domain: process.env.UNIVERSE_DOMAIN,

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
