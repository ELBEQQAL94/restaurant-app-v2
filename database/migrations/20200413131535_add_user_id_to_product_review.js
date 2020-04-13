const { reference } = require("../helpers");
const { productReview } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(productReview, (table) => {
    reference(table, "users");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(productReview, (table) => {
    table.dropColumn("users_id");
  });
};
