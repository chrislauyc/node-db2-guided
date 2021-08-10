exports.seed = function (knex) { // dependency injection
  return knex('fruits').truncate() // reset primary keys
    .then(function () {
      return knex('fruits').insert([
        { fruit_name: 'apple', avg_weight: 10.5, is_delicious: true  }, // DELETE THE IDS!!!!!!!!!
        { fruit_name: 'rowValue2', avg_weight: 10.5, is_delicious: false  },
        { fruit_name: 'rowValue3', avg_weight: 10.5 },
      ]);
    });
};
