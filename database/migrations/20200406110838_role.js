const { role } = require("../src/db/constants");

exports.up = async (knex) => {
  await knex.schema.createTable(role, (table) => {
    table.increments();
    table.string("name", 254).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(role);
};
