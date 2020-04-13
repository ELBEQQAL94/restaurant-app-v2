const { team } = require("../src/db/tableNames");

const {
  image_url,
  createId,
  addDefaultColumns,
  phone,
  email,
} = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(team, (table) => {
    createId(table);
    table.string("firstname").notNullable();
    table.string("lastname").notNullable().unique();
    email(table);
    phone(table);
    image_url(table);
    addDefaultColumns(table);
    table.datetime("deleted_at", { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(team);
};
