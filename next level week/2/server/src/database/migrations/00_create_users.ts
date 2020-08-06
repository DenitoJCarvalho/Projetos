import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema.createTableIfNotExists('users', (table) => {
        table.increments('id_user').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('whatsapp').notNullable()
        table.string('bio').notNullable()
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTable('users')
}