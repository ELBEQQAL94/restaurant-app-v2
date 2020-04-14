const db = require("../db");
const { users } = require("../db/tableNames");
const { insertIntoTable } = require("./index");

module.exports = {
  findUserByEmail(email) {
    return db(users).where("email", email).first();
  },
  async update(id, user) {
    const rows = await db(users).where("id", id).update(user, "*");
    return rows[0];
  },
  insert(user) {
    return insertIntoTable(user, users);
  },
  findAdmins() {
    return db(users).where("role_id", 2);
  },
};
