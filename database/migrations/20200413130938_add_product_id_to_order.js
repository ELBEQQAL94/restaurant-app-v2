const { reference } = require("../helpers");
const { order } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(order, (table) => {
    reference(table, "product");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(order, (table) => {
    table.dropColumn("product_id");
  });
};
