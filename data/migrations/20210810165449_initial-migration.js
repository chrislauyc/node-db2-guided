exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
    tbl.increments()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
