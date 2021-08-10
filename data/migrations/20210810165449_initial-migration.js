exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
    tbl.increments('fruit_id') // creates an id column, auto inc integers, PKey!
    tbl.
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
