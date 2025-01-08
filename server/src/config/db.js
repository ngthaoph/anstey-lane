//Establish connection with firestore & provide API libraries for use with the database
var admin = require("firebase-admin");
const config = require("./config");

try {
  console.log("Attempting db connection ...");

  // 1. GRANT ADMIN ACCESS TO FIREBASE SERVICES
  let serviceAccountKey;
  //different setups based on environment
  if (config.env === "development" || config.env === "production") {
    serviceAccountKey = require(config.db.google_account_credentials);
  } else if (config.env === "preview") {
    // DOCS: https://firebase.google.com/docs/reference/admin/node/firebase-admin.app
    serviceAccountKey = {
      type: config.db.type,
      project_id: config.db.project_id,
      private_key_id: config.db.private_key_id,
      private_key: config.db.private_key,
      client_email: config.db.client_email,
      client_id: config.db.client_id,
      auth_uri: config.db.auth_uri,
      token_uri: config.db.token_uri,
      auth_provider_x509_cert_url: config.db.auth_provider_x509_cert_url,
      client_x509_cert_url: config.db.client_x509_cert_url,
      universe_domain: config.db.universe_domain,
    };
  }
  console.log(serviceAccountKey);
  console.log(config.env);

  const firebaseAppOptions = {
    credential: admin.credential.cert(serviceAccountKey),
    storageBucket: config.db.storageBucket,
  };

  // 2. Init Firebase services & sets core database apis
  admin.initializeApp(firebaseAppOptions);

  // 3. Set our core database API libraries
  //we store the connection to the library in the db variable
  const db = admin.firestore(); //getting access to the firestore library
  const bucket = admin.storage().bucket();

  // "Ping test" Function (only use in development)
  const dbPing = db.listCollections().then((collections) => {
    console.log("Connected to Cloud Firestore");
    for (let collection of collections) {
      console.log(`Found db collection: ${collection.id}`);
    }
  });

  // 4. Export libraries for use in our app
  module.exports = { db, bucket, dbPing };
} catch (err) {
  console.log(err);
}
