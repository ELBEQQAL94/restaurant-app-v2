const { product } = require("../src/db/tableNames");

exports.seed = async (knex) => {
  await knex(product).del();
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 2;");
  return knex(product).insert([
    {
      id: 1,
      name: "Egg Rolls",
      price: "12.50$",
      description:
        "Wontons are a great meal or appetizer. Once they have been put together you can either fry them or steam them, both ways are delicious",
      image_url:
        "https://i.huffpost.com/gen/1214804/thumbs/o-EGG-ROLL-facebook.jpg",
      product_category_id: 2,
    },
  ]);
};
