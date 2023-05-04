const express = require("express");
const { Op, where } = require("sequelize");
const UserModal = require("../db/models/UserModal");
const bcrypt = require("bcrypt");
const router = express.Router();

// Register

router.post("/register", async (req, res) => {
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

// Login

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    const checkUser = await UserModal.findOne({
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

// Get-User

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getUser = await UserModal.findOne({
    where: {
      id: id,
    },
  });

  if (!getUser) {
    res.status(404).json("user Not found");
  } else {
    res.status(200).json({
      id: getUser.id,
      email: getUser?.email,
      name: getUser?.name,
    });
  }
});

module.exports = router;
