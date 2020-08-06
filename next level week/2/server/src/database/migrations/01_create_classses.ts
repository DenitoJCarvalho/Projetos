import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema.createTableIfNotExists('classes', (table) => {
        table.increments('id_classes').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()

        table.integer('user_id')
            .notNullable()
            .references('id_user')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTable('classes')
}