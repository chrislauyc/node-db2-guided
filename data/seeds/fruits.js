exports.seed = function (knex) { // dependency injection
  return knex('fruits').truncate() // reset primary keys
    .then(function () {
      return knex('fruits').insert([
        { colName: 'rowValue1' },
        { colName: 'rowValue2' },
        { colName: 'rowValue3' }
      ]);
    });
};
