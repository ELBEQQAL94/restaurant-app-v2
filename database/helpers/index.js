function reference(table, name) {
  table
    .integer(`${name}_id`)
    .unsigned()
    .references("id")
    .inTable("role")
    .onDelete("cascade");
}

function image_url(table) {
  table.string("image_url", 2000);
}

function createId(table) {
  table.increments();
}

function description(table) {
  table.string("description");
}

function addDefaultColumns(table) {
  table.timestamps(false, true);
}

function email(table) {
  table.string("email").notNullable().unique();
}

function phone(table) {
  table.string("phone");
}

function name(table) {
  table.string("name", 254).notNullable().unique();
}

module.exports = {
  reference,
  image_url,
  createId,
  description,
  addDefaultColumns,
  email,
  phone,
  name,
};
