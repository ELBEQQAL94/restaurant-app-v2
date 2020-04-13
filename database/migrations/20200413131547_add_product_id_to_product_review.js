const { reference } = require("../helpers");
const { productReview } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(productReview, (table) => {
    reference(table, "product");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(productReview, (table) => {
    table.dropColumn("product_id");
  });
};
