const { reference } = require("../helpers");
const { users } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(users, (table) => {
    reference(table, "product");
  });
};

exports.down = async (knex) => {
  await knex.schema.table("users", (table) => {
    table.dropColumn("product_id");
  });
};
