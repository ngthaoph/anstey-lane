//anything to do with the storage bucket
const { bucket } = require("../config/db");
const uuid = require("uuid");
const fs = require("fs");
const config = require("../config/config");

module.exports = {
  async storageBucketUpload(filename) {
    //1. generate random UUID storage token
    console.log(`Firestore file for upload: ${filename}`);
    const storageToken = uuid.v4();
    //2.DECLARE FILEPATH & UPLOAD OPTIONS
    const serverFilePath = `./public/uploads/${filename}`; //access it as it if in the root directory
    const options = {
      destination: filename,
      resumable: true,
      validation: "crc32c",
      //mint the token
      metadata: {
        metadata: {
          firebaseStorageDownloadTokens: storageToken,
        },
      },
    };
    // OPTIONAL DEBUGGING: Checks if server-side /uploads file exists before BUCKET UPLOAD
    fs.access(serverFilePath, fs.F_OK, (err) => {
      if (err) {
        console.log(err);
        return {
          message: "Error occurred in storing file to server",
        };
      } else {
        console.log("File Successfully Stored in Server");
      }
    });

    //3. ******CLOUD FIRESTORE UPLOAD CALL******
    const result = await bucket.upload(serverFilePath, options);
    const bucketName = result[0].metadata.bucket;
    console.log(`Bucket name: ${bucketName}`);
    //4. CONTRUCT THE DOWNLOAD URL
    const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;
    //5. ONCE IT IS UPLOADED SUCCESFULLY, DELTE THE TEMP FILE FROM UPLOADS
    fs.unlink(serverFilePath, (err) => {
      if (err) {
        console.log(err);
        return {
          message: "Error occurred in remove file from temp uploads storage",
        };
      } else {
        console.log("File in temp uploads storag deleted!");
      }
    });
    return downloadURL;
  },

  getFileFromUrl(downloadURL) {
    console.log(downloadURL);
    // Slice off the base URL from downloadURL
    const baseURL = `https://firebasestorage.googleapis.com/v0/b/${config.db.storageBucket}/o/`;

    let fileGlob = downloadURL.replace(baseURL, "");

    // Remove everything after the query string
    const indexOfEndPath = fileGlob.indexOf("?");
    fileGlob = fileGlob.substring(0, indexOfEndPath);

    // Return existing uploaded file glob
    console.log(`Generated File Glob: ${fileGlob}`);
    return fileGlob;
  },
  async deleteFileFromBucket(uploadedFile) {
    // Determining file location in bucket
    const file = bucket.file(uploadedFile);
    const fileChecker = await file.exists();

    // [400 ERROR] Check for file existing in storage
    if (fileChecker[0] === false) {
      // [TOGGLE]: Whether we return an error here OR not
      // true = ignores missing file
      const options = {
        ignoreNotFound: true,
      };

      // Call this modified delete request
      const data = await file.delete(options);
      console.log(
        `The file: ${uploadedFile}, does NOT exist in storage - please check server for file handling`
      );

      // Return API
      return data[0];
    } else {
      // FILE EXISTS
      const data = await file.delete();
      console.log(`File deleted from storage: ${uploadedFile}`);

      // Return API
      return data[0];
    }
  },
};
