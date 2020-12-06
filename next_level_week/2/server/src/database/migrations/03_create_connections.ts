import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema.createTableIfNotExists('connections', (table) => {
        table.increments('id_connection').primary()

        table.integer('user_id')
            .notNullable()
            .references('d_user')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created-at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTable('connections')
}