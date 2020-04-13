const { createId, name, addDefaultColumns } = require("../helpers");
const { productCategory } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.createTable(productCategory, (table) => {
    createId(table);
    name(table);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(productCategory);
};
