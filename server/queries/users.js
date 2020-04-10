const Joi = require("@hapi/joi");
const db = require("../db");
const { users } = require("../db/tableNames");

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  email: Joi.string().email(),
  google_id: Joi.string().required(),
  image_url: Joi.string(),
  phone: Joi.string(),
  active: Joi.boolean(),
  role_id: Joi.number().integer(),
});

module.exports = {
  findUserByEmail(email) {
    return db(users).where("email", email).first();
  },
  async update(id, user) {
    const rows = await db(users).where("id", id).update(user, "*");
    return rows[0];
  },
  insert(user) {
    return insertIntoTableAndValidate(user, users, schema);
  },
  findAdmins() {
    return db(users).where("role_id", 2);
  },
};
