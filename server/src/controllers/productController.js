const { db } = require("../config/db");
const ApiError = require("../utilities/ApiError");
const {
  storageBucketUpload,
  deleteFileBucket,
  getFileFromUrl,
  deleteFileFromBucket,
} = require("../utilities/bucketServices");

module.exports = {
  // GET ALL Products
  async getAllProducts(req, res, next) {
    const productsRef = db.collection("products");
    const snapshot = await productsRef
      // .where("base", "==", "espresso")
      .orderBy("name", "asc")

      .get();

    //2.check for emppty collection
    if (snapshot.empty) {
      return next(
        ApiError.badRequest("The users you were looking for do not exist")
      );
    }
    //3.restructure data into array that includes doc.id
    let products = [];
    snapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        name: doc.data().name,
        origin: doc.data().origin,
        price: doc.data().price,
        base: doc.data().base,
        tasting: doc.data().tasting,
        image: doc.data().image,
      });
    });
    res.send(products);
  },

  async getProductsUnder60(req, res, next) {
    try {
      const productRef = db.collection("products");
      const snapshot = await productRef
        .where("price", "<", 60)
        .orderBy("name", "asc")
        .get();
      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The items you were looking for do not exist")
        );
      }
      //SUCCESS
      let products = [];
      snapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          name: doc.data().name,
          origin: doc.data().origin,
          price: doc.data().price,
          base: doc.data().base,
          tasting: doc.data().tasting,
          image: doc.data().image,
        });
      });
      res.send(products);
    } catch (error) {
      console.log(ApiError.internal("Failed to fetch products", error));
    }
  },

  // POST Products
  async postProducts(req, res, next) {
    //1. POST IMAGE TO STORAGE BUCKET
    let downloadURL = null;
    try {
      const filename = res.locals.filename;
      //***IMPORTANT */
      downloadURL = await storageBucketUpload(filename);
    } catch (error) {
      return next(ApiError.internal("Failed to upload image", error));
    }

    //2. POST DATA TO FIRE STORE
    try {
      const productsRef = db.collection("products");
      const response = await productsRef.add({
        name: req.body.name,
        origin: req.body.origin,
        price: Number(req.body.price),
        tasting: req.body.tasting,
        base: req.body.base,
        image: downloadURL,
      });
      console.log(`Added Product ID: ${response.id}`);
      res.send(` ${response.id}`);
    } catch (err) {
      return next(ApiError.internal("Failed to add product", err));
    }
  },

  // GET BY ID Products
  async getProducts(req, res, next) {
    try {
      const productRef = db.collection("products").doc(req.params.id);
      const doc = await productRef.get();
      if (!doc.exists) {
        return next(ApiError.notFound("Product not found"));
      }

      res.send({
        id: doc.id,
        name: doc.data().name,
        origin: doc.data().origin,
        price: doc.data().price,
        base: doc.data().base,
        tasting: doc.data().tasting,
        image: doc.data().image,
      });
    } catch (err) {
      return next(ApiError.internal("Failed to get product", err));
    }
  },
  //  async getProducts(req, res, next) {
  //   try {
  //     const ids = req.params.ids.split(","); // Split the comma-separated IDs
  //     const productRef = db.collection("products");
  //     const productPromises = ids.map((id) => productRef.doc(id).get());
  //     const docs = await Promise.all(productPromises);

  //     const products = docs
  //       .filter((doc) => doc.exists) // Filter out non-existent documents
  //       .map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(), // Spread the data object for cleaner mapping
  //       }));

  //     if (products.length === 0) {
  //       return next(ApiError.notFound("No products found"));
  //     }

  //     res.send(products);
  //   } catch (err) {
  //     return next(ApiError.internal("Failed to get products", err));
  //   }
  // },
  // DELETE BY ID Products
  async deleteProductById(req, res, next) {
    // try {
    //   res.send("Product deleted successfully!");
    // } catch (error) {
    //   return next(ApiError.internal("Failed to delete product", error));
    // }
    try {
      const productRef = db.collection("products").doc(req.params.id);
      const doc = await productRef.get();
      if (!doc.exists) {
        return next(ApiError.notFound("Product not found"));
      }
      //doc is queued for deletion

      const downloadURL = doc.data().image;
      const uploadedFile = getFileFromUrl(downloadURL);
      const bucketResponse = await deleteFileFromBucket(uploadedFile);

      //delete image from storage

      if (!bucketResponse) {
        return next(
          ApiError.internal("Your image for deletion does not exist", err)
        );
      } else {
        const response = await productRef.delete({ exists: true });
        res.send(response);
      }
    } catch (err) {
      return next(ApiError.internal("Failed to delete product", err));
    }
  },
  //GET BY PRODUCT BASE
  async getProductsByBase(req, res, next) {
    const { base } = req.params;
    const productRef = db.collection("products");
    const snapshot = await productRef.get();
    let products = [];
    snapshot.forEach((doc) => {
      if (doc.data().base === base) {
        products.push({
          id: doc.id,
          name: doc.data().name,
          origin: doc.data().origin,
          price: doc.data().price,
          base: doc.data().base,
          tasting: doc.data().tasting,
          image: doc.data().image,
        });
      }
    });
    res.send(products);
  },
  async putProductById(req, res, next) {
    // 1. FILE STORAGE UPLOADS
    let downloadURL;
    try {
      if (req.files) {
        // UPLOAD NEW IMAGE to Storage
        const filename = res.locals.filename;
        downloadURL = await storageBucketUpload(filename);

        // ALSO Delete the OLD IMAGE in Storage
        if (req.body.uploadedFile) {
          console.log(
            `Deleting old image in storage: ${req.body.uploadedFile}`
          );
          const bucketResponse = await deleteFileFromBucket(
            req.body.uploadedFile
          );
        }
      } else {
        // NO NEW IMAGE (save old file path to storage image)
        console.log("No change to image in Storage Bucket");
        downloadURL = req.body.image;
      }
    } catch (err) {
      return next(
        ApiError.internal(
          "An error occurred in uploading your image to storage",
          err
        )
      );
    }
    // 2. FIRESTORE UPDATE
    try {
      const productRef = db.collection("products").doc(req.params.id);
      const response = await productRef.update({
        name: req.body.name,
        origin: req.body.origin,
        price: Number(req.body.price),
        tasting: req.body.tasting,
        base: req.body.base,
        image: downloadURL,
      });
      console.log(response);
      res.send(response);
    } catch (err) {
      return next(
        ApiError.internal(
          "Your request could not be processed at this time",
          err
        )
      );
    }
  },
  async getOnSale(req, res, next) {
    try {
      const productRef = db.collection("products");
      const snapshot = await productRef.where("price", "<", 60).get();
      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The items you were looking for do not exist")
        );
      }
      //SUCCESS
      let products = [];
      snapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          name: doc.data().name,
          origin: doc.data().origin,
          price: doc.data().price,
          base: doc.data().base,
          tasting: doc.data().tasting,
          image: doc.data().image,
        });
      });
      res.send(products);
    } catch (error) {
      console.log(ApiError.internal("Failed to fetch products", error));
    }
  },
};
