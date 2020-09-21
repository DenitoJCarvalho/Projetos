const path = require('path')

const knex = require('knex')({
    client: "mysql",
    connection : {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'manager_mei',
        filename: 'manager_mei.sql',
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database','migrations' )
    },

    useNullAsDefault: true,
})


module.exports = knex
