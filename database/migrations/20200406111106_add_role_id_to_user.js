const { reference } = require("../helpers");
const { users } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(users, (table) => {
    //reference(table, "role");
    table
      .integer("role_id")
      .unsigned()
      .references("id")
      .inTable("role")
      .default(1)
      .onDelete("cascade");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(users, (table) => {
    table.dropColumn("role_id");
  });
};
