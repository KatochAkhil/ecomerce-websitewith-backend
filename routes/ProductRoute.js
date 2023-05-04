const express = require("express");
const { Op, where } = require("sequelize");
const ProductModal = require("../db/models/ProductModal");
const router = express.Router();
const upload = require("../multer");
const cloudinary = require("../cloudinary");
const fs = require("fs");

// Add A Product
router.post("/add", async (req, res) => {
  const createProduct = await ProductModal.create(req.body);
  return res
    .status(201)
    .json({ msg: "Product Added Successfully", data: createProduct });
});
// imaged uploads

router.post("/upload", upload.array("image"), async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "Images");

  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newPath = await uploader(path);
    urls.push(newPath);
    fs.unlinkSync(path);
  }
  res.status(200).json({
    message: "Images Uploaded Successfully",
    data: urls,
  });
});

// Get Single product

router.get("/:id", async (req, res) => {
  const getSingleProduct = await ProductModal.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!req.params.id) {
    return res.status(400).json("Please provide a valid id");
  } else {
    return res.status(200).json(getSingleProduct);
  }
});

// Get All Products

router.get("/all", async (req, res) => {
  console.log("first");
  const getSingleProduct = await ProductModal.findAndCountAll();
  return res.status(200).json({ msg: "Successfull", data: getSingleProduct });
});

// Get Products Related to category
//delete Product
router.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(401).json("Not Authrozied");
  } else {
    const deleteproduct = await ProductModal.destroy({
      where: {
        id,
      },
    });
    return res.status(201).json("Product Deleted Successfully");
  }
});

//Edit Product

router.post("/edit", async (req, res) => {
  const Editproduct = await ProductModal.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
  return res
    .status(201)
    .json({ msg: "Product Edited Successfully", data: Editproduct });
});

//  Get Single Product

router.get("/:id", async (req, res) => {});

// Search Products

// filter Products

module.exports = router;
