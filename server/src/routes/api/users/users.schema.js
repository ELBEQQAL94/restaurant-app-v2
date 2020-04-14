const Joi = require("@hapi/joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().trim().min(6),
  role: Joi.string().valid("user", "admin"),
  active: Joi.bool(),
});

module.exports = schema;
