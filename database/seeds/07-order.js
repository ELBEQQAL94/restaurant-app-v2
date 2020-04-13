const { order } = require("../src/db/tableNames");

exports.seed = async (knex) => {
  await knex(order).del();
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 2;");
  return knex(order).insert([
    {
      id: 1,
      users_id: 1,
      product_id: 1,
    },
  ]);
};
