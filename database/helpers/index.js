function reference(table) {
  table.integer("role_id").unsigned().references("id").inTable("role");
}

module.exports = {
  reference,
};
