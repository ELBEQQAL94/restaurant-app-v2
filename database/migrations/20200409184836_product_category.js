const { image_url, createId, description } = require("../helpers");
const { productCategory } = require("../src/db/constants");

exports.up = async (knex) => {
  await knex.schema.createTable(productCategory, (table) => {
    createId(table);
    table.string("name", 254).notNullable().unique();
    description(table);
    image_url(table);
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(productCategory);
};
