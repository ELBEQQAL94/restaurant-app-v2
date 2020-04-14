const db = require("../db");

async function insertIntoTable(item, table_name) {
  const rows = await db(table_name).insert(item, "*");
  return rows[0];
}

module.exports = {
  insertIntoTable,
};
