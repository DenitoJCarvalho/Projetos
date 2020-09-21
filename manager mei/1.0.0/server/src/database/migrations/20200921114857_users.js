exports.up = async (knex) => {
  return await knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id_user').unsigned().primary()
    table.string('name', 50).notNullable()
    table.string('cnpj', 14).notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.charset('utf8')
    table.collate('utf8_general_ci')
  })
}

exports.down = async (knex) => {
  return await knex.schema.dropTable('users')
}

