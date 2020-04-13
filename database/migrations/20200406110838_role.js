const { role } = require("../src/db/tableNames");
const { name, addDefaultColumns } = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(role, (table) => {
    table.increments();
    name(table);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(role);
};
