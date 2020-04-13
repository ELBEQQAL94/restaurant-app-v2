const { productCategory } = require("../src/db/tableNames");

exports.seed = async (knex) => {
  await knex(productCategory).del();
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 4;");
  return knex(productCategory).insert([
    { id: 1, name: "Moroccan" },
    { id: 2, name: "Chines" },
    { id: 3, name: "Italian" },
  ]);
};
