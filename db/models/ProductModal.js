const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const ProductModal = db.define(
  "products",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("image").split(";");
      },
      set(val) {
        this.setDataValue("image", val.join(";"));
      },
    },
    sku: DataTypes.STRING,
    price: DataTypes.STRING,
    stock: DataTypes.STRING,
    variants: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("variants").split(";");
      },
      set(val) {
        this.setDataValue("variants", val.join(";"));
      },
    },
    category: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = ProductModal;
