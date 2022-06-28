/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.bigIncrements('id');
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('mobile_phone_number');
    table.tinyint('2fa_type');
    table.timestamp('lastlogin');
    table.string('reset_token');
    table.boolean('is_active');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
