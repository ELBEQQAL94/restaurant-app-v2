const Joi = require("@hapi/joi");
const db = require("../db");
const { productCategory } = require("../db/tableNames");
const { insertIntoTableAndValidate } = require("./index");

const schema = Joi.object({
  name: Joi.string().min(3).max(254).required(),
  description: Joi.string(),
  image_url: Joi.string(),
});

module.exports = {
  getAll() {
    return db(productCategory).select();
  },
  insert(category) {
    return insertIntoTableAndValidate(category, productCategory, schema);
  },
};
