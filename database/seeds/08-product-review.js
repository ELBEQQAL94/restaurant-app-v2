const { productReview } = require("../src/db/tableNames");

exports.seed = async (knex) => {
  await knex(productReview).del();
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 2;");
  return knex(productReview).insert([
    {
      id: 1,
      description: "description...",
      product_id: 1,
      users_id: 1,
    },
  ]);
};
