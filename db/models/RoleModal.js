const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const RolesModal = db.define(
  "roles",
  {
    userId: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = RolesModal;
