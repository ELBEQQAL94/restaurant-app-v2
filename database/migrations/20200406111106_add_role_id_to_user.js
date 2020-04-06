const { reference } = require("../helpers");
const { users } = require("../src/db/constants");

exports.up = async (knex) => {
  await knex.schema.table(users, (table) => {
    reference(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.table("users", (table) => {
    table.dropColumn("role_id");
  });
};
