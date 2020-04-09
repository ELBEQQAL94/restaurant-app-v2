function reference(table, name) {
  table.integer(`${name}_id`).unsigned().references("id").inTable("role");
}

function image_url(table) {
  table.string("image_url", 254);
}

function createId(table) {
  table.increments();
}

function description(table) {
  table.string("description", 254).notNullable();
}

module.exports = {
  reference,
  image_url,
  createId,
  description,
};
