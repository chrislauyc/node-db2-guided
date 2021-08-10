
exports.up = function(knex) {
  return knex.schema.table('fruits', tbl => {
    tbl.string('fruit_color', 290)
  })
};

exports.down = function(knex) {

};
