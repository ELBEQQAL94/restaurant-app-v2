const { product } = require("../src/db/tableNames");

const {
  image_url,
  createId,
  addDefaultColumns,
  description,
} = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(product, (table) => {
    createId(table);
    table.string("name").notNullable();
    table.string("price").notNullable();
    description(table);
    image_url(table);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(product);
};
