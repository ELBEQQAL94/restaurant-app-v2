function reference(table, name) {
  table.integer(`${name}_id`).unsigned().references("id").inTable("role");
}

module.exports = {
  reference,
};
