const { users } = require("../src/db/tableNames");

const { image_url, createId, addDefaultColumns, email } = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(users, (table) => {
    createId(table);
    table.string("username").notNullable();
    email(table);
    table.string("password");
    table.string("google_id");
    image_url(table);
    table.boolean("active").notNullable().default(true);
    table.datetime("last_login", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime("deleted_at");
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(users);
};
