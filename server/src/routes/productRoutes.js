const express = require("express");
const router = express.Router();
const FilePolicy = require("../policies/filePolicy");
const ProductPolicy = require("../policies/productPolicy");

const ProductController = require("../controllers/productController");
const VerifyAuth = require("../middleware/verifyAuth");
const fileServerUpload = require("../middleware/fileServerUpload");

module.exports = () => {
  // GET ALL Products: /api/products/
  router.get("/", ProductController.getAllProducts);

  // GET onSale Products

  // POST Products
  //the order matters so we have to use array
  router.post(
    "/product",
    [
      ProductPolicy.validateProduct,
      FilePolicy.filePayloadExists,
      FilePolicy.fileSizeLimiter,
      FilePolicy.fileExtLimiter([".png", ".jpg", ".gif", ".jpeg"]),
      // VerifyAuth.auth,
      fileServerUpload,
    ],
    ProductController.postProducts
  );

  // GET BY ID Products
  //localhost:5005/api/products/:id
  router.get("/:id", ProductController.getProducts);

  //GET BY BASE PRODUCTS'
  //localhost:5005/api/products/base
  router.get("/product/:base", ProductController.getProductsByBase);

  // UPDATE BY ID Products
  //localhost:5005/api/products/9S7Tvrfyd6hKJ6q02veP

  router.put(
    "/:id",
    [
      ProductPolicy.validateProduct,
      FilePolicy.filePayloadExists,
      FilePolicy.fileSizeLimiter,
      FilePolicy.fileExtLimiter([".png", ".jpg", ".jpeg", ".gif"]),
      fileServerUpload,
    ],

    ProductController.putProductById
  );

  router.delete("/:id", ProductController.deleteProductById);

  // //replace this later
  // // DELETE BY ID Product'
  // router.delete(
  //   "/:id",
  //   [VerifyAuth.auth, VerifyAuth.admin],
  //   ProductController.deleteProductById
  // );

  return router;
};
