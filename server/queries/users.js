const Joi = require("@hapi/joi");
const db = require("../db");

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  email: Joi.string().email(),
  google_id: Joi.string().required(),
  image_url: Joi.string(),
  phone: Joi.string(),
  active: Joi.boolean().required(),
  role: Joi.number().integer(),
});

module.exports = {
  findUserByEmail(email) {
    return db("users").where("email", email).first();
  },
  insert(user) {
    const result = schema.validate(user);
    if (result.error) {
      console.log(result);
      // return Promise.reject(result);
    } else {
      return db("users").insert(user);
    }
  },
};
