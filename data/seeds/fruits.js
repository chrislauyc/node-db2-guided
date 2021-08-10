exports.seed = function (knex) { // dependency injection
  return knex('fruits').truncate() // reset primary keys
    .then(function () {
      return knex('fruits').insert([
        { fruit_name: 'rowValue1', avg_weight:   }, // DELETE THE IDS!!!!!!!!!
        { fruit_name: 'rowValue2', avg_weight:   },
        { fruit_name: 'rowValue3', avg_weight:   }
      ]);
    });
};
