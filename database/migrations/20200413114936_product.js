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
    table.string("origin").notNullable();
    table.string("recipe");
    description(table);
    table.datetime("open", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime("closed", { precision: 6 }).defaultTo(knex.fn.now(6));
    image_url(table);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(product);
};
