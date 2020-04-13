const { position } = require("../src/db/tableNames");

exports.seed = async (knex) => {
  await knex(position).del();
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 3;");
  return knex(position).insert([
    { id: 1, name: "chef" },
    { id: 2, name: "master" },
  ]);
};
