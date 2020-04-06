//     "role_id" unsigned_int,
//     "product_id" unsigned_int,
//     "last_login" date,
//     "deleted_at" date,

const { users } = require("../src/db/constants");

exports.up = async (knex) => {
  await knex.schema.createTable(users, (table) => {
    table.increments();
    table.string("username", 254).notNullable();
    table.string("email", 254).notNullable().unique();
    table.string("password", 254);
    table.string("phone", 254);
    table.string("image_url", 254);
    table.boolean("active").notNullable().default(true);
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(users);
};
