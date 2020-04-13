const { team } = require("../src/db/tableNames");

exports.seed = async (knex) => {
  await knex(team).del();
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 2;");
  return knex(team).insert([
    {
      id: 1,
      firstname: "john",
      lastname: "doe",
      email: "email@email.com",
      phone: "125487412587",
      image_url:
        "https://si.wsj.net/public/resources/images/ED-AM674_person_G_20101206164729.jpg",
      position_id: 1,
    },
  ]);
};
