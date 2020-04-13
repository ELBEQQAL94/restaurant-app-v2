const { position } = require("../src/db/tableNames");

const { createId, name, addDefaultColumns } = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(position, (table) => {
    createId(table);
    name(table);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(position);
};
