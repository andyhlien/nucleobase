exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('appointments', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('sender').references('id').inTable('profiles');
      table.integer('receiver').references('id').inTable('profiles');
      table.string('time', 255).nullable();
      table.string('date', 255).nullable();
      table.integer('price').nullable();
      table.string('location', 255).nullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('appointments'),
  ]);
};