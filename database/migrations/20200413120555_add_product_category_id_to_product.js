const { reference } = require("../helpers");
const { product } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(product, (table) => {
    reference(table, "product_category");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(product, (table) => {
    table.dropColumn("product_category_id");
  });
};
