exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.string('type', 255).nullable();
    table.integer('rating').nullable();
    table.integer('rating_count').nullable();
    table.string('cookie', 100).nullable();
    table.integer('total_view').nullable();
    table.string('gyms', 255).nullable();
    table.integer('avg_price').nullable();
    table.string('qualification', 255).nullable();
    table.string('biography', 255).nullable();
    table.string('goals', 255).nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.dropColumn('type');
    table.dropColumn('rating');
    table.dropColumn('rating_count');
    table.dropColumn('cookie');
    table.dropColumn('total_view');
    table.dropColumn('gyms');
    table.dropColumn('avg_price');
    table.dropColumn('qualification');
    table.dropColumn('biography');
    table.dropColumn('goals');
  });
};



