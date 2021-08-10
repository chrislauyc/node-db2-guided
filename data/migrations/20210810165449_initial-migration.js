exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
    tbl.increments('fruit_id') // creates an id column, auto inc integers, PKey!
    tbl.text('fruit_name', 256).unique().notNullable()
    tbl.float('avg_weight').notNullable() // required
    tbl.boolean('is_delicious')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
