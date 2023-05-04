const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const AdminUserModal = db.define(
  "admin_users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = AdminUserModal;
