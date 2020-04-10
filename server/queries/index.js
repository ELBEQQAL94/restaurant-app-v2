const db = require("../db");

async function insertIntoTableAndValidate(item, table_name, schema) {
  const result = schema.validate(item);
  if (result.error) {
    return Promise.reject(result);
  } else {
    const rows = await db(table_name).insert(item, "*");
    return rows[0];
  }
}

module.exports = {
  insertIntoTableAndValidate,
};
