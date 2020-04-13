const { order } = require("../src/db/tableNames");

const { createId, addDefaultColumns } = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(order, (table) => {
    createId(table);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(order);
};
