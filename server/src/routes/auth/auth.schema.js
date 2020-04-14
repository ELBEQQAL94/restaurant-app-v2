const Joi = require("@hapi/joi");

const signUpSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  email: Joi.string().email(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().trim().min(6).required(),
});

module.exports = { signUpSchema, loginSchema };
