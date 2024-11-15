//Establish connection with firestore & provide API libraries for use with the database
var admin = require("firebase-admin");
const config = require("./config");

try {
  console.log("Attempting db connection ...");

  // 1. GRANT ADMIN ACCESS TO FIREBASE SERVICES
  let serviceAccountKey = config.db.serviceAccountKey;
  console.log(serviceAccountKey);
  const firebaseAppOptions = {
    credential: admin.credential.cert(serviceAccountKey),
    storageBucket: config.db.storageBucket,
  };

  // 2. Init Firebase services
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
