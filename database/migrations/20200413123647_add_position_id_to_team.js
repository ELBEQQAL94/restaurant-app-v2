const { reference } = require("../helpers");
const { team } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(team, (table) => {
    reference(table, "position");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(team, (table) => {
    table.dropColumn("position_id");
  });
};
