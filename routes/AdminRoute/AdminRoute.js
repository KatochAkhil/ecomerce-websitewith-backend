const express = require("express");
const { Op, where } = require("sequelize");
const UserModal = require("../../db/models/UserModal");
const bcrypt = require("bcrypt");
const ProductModal = require("../../db/models/ProductModal");
const AdminUserModal = require("../../db/models/AdminusersModal");
const RolesModal = require("../../db/models/RoleModal");
const router = express.Router();

// const upload = require("../../multer");
// const cloudinary = require("../../cloudinary");

// Admin registrer

router.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  const checkUser = await AdminUserModal.findOne({
    where: { email },
  });

  if (checkUser) {
    return res.status(400).json("User Already Exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const createUser = await AdminUserModal.create({
      name,
      email,
      password,
    });
    const createRole = await RolesModal.create({
      userId: createUser.id,
      role: req.body.role,
    });

    return res
      .status(201)
      .json({ msg: "user Created Successfully", data: createUser });
  }
});

// Admin Login

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    const checkUser = await AdminUserModal.findOne({
      where: {
        email,
        password: { [Op.ne]: null },
      },
    });
    if (!checkUser) {
      res.status(404).json("User not Found");
    } else {
      const valid = await bcrypt.compare(password, checkUser.password);
      if (!valid) {
        res.status(404).json("Email/Password do not match");
      } else {
        res.status(200).json({
          msg: "Login Successfull",
          data: {
            id: checkUser.id,
            name: checkUser.name,
            email: checkUser.email,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// Get All Products

router.get("/products/all", async (req, res) => {
  const getAllProducts = await ProductModal.findAndCountAll();
  return res
    .status(200)
    .json({ msg: "Products Fetched Successfull", data: getAllProducts });
});

// Get All users

router.get("/users/all", async (req, res) => {
  const getAllUsers = await UserModal.findAndCountAll();
  return res.status(200).json({
    msg: "Users Fetched Successfull",
    data: getAllUsers,
  });
});

// Add User
router.post("/user/add", async (req, res) => {
  let { name, email, password } = req.body;
  const checkUser = await UserModal.findOne({
    where: { email },
  });
  if (checkUser) {
    return res.status(400).json("User Already Exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const createUser = await UserModal.create({
      name,
      email,
      password,
    });
    return res
      .status(201)
      .json({ msg: "user Created Successfully", data: createUser });
  }
});

//  Get Single User

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const getUser = await UserModal.findOne({
    where: {
      id: id,
    },
  });

  if (!getUser) {
    return res.status(404).json("User Not found");
  } else {
    return res.status(200).json({
      id: getUser.id,
      email: getUser?.email,
      name: getUser?.name,
    });
  }
});

// Delete user

router.post("/user/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(401).json("Not Authrozied");
  } else {
    await UserModal.destroy({
      where: {
        id,
      },
    });
    return res.status(201).json("Product Deleted Successfully");
  }
});

// add product

router.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  const getSingleProduct = await ProductModal.findOne({
    where: {
      id: id,
    },
  });
  return res.status(200).json(getSingleProduct);
});

// edit Product

router.post("/product/edit", async (req, res) => {
  const Editproduct = await ProductModal.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
  if (!req.body.id) {
    return res.status(500).json("No Data Found");
  } else {
    return res
      .status(201)
      .json({ msg: "Product Edited Successfully", data: Editproduct });
  }
});

// Delete Product

router.post("/product/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(401).json("Not Authrozied");
  } else {
    await ProductModal.destroy({
      where: {
        id,
      },
    });
    return res.status(201).json("Product Deleted Successfully");
  }
});

module.exports = router;
