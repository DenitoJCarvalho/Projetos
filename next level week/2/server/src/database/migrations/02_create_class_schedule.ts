import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema.createTableIfNotExists('class_schedule', (table) => {
        table.increments('id_class_schedule').primary()
        
        table.integer('week_day').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()

        table.integer('class_id')
            .notNullable()
            .references('id_classes')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTable('class_schedule')
}