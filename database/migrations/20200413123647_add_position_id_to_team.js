const { reference } = require("../helpers");
const { position } = require("../src/db/tableNames");

exports.up = async (knex) => {
  await knex.schema.table(position, (table) => {
    reference(table, "team");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(position, (table) => {
    table.dropColumn("team_id");
  });
};
