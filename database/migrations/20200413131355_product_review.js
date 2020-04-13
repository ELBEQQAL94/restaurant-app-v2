const { productReview } = require("../src/db/tableNames");

const { createId, description, addDefaultColumns } = require("../helpers");

exports.up = async (knex) => {
  await knex.schema.createTable(productReview, (table) => {
    createId(table);
    description(table);
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(productReview);
};
