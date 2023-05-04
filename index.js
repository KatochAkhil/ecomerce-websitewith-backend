const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const UserRoute = require("./routes/Authroute");
const ProductRoute = require("./routes/ProductRoute");
const AdminRoute = require("./routes/AdminRoute/AdminRoute");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/auth", UserRoute);
app.use("/api/products", ProductRoute);
app.use("/api/admin", AdminRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is Running on Port No ${process.env.PORT || 8000}`);
});
