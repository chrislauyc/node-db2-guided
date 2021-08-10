exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
