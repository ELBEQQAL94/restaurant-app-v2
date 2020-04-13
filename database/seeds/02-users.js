const { users } = require("../src/db/tableNames");

exports.seed = async (knex) => {
  await knex(users).del();
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 2;");
  return knex(users).insert([
    {
      id: 1,
      username: "john doea",
      email: "email@email.com",
      password: "",
      google_id: "",
      phone: "06750588801",
      role_id: 1,
    },
  ]);
};
