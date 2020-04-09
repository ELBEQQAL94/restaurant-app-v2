//     "role_id" unsigned_int,
//     "product_id" unsigned_int,
//     "last_login" date,
//     "deleted_at" date,

const { users } = require("../src/db/constants");

const { image_url, createId } = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(users, (table) => {
    createId(table);
    table.string("username", 254).notNullable();
    table.string("email", 254).notNullable().unique();
    table.string("password", 254);
    table.string("google_id", 254).notNullable();
    table.string("phone", 254);
    image_url(table);
    table.boolean("active").notNullable().default(true);
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(users);
};
