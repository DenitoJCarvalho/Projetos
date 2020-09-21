const path = require('path') 


module.exports = {
    client: 'mysql',
    connection: process.env.DATABASE_URL || {
        user: 'root', 
        password: '',
        database: 'manager_mei'
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }, 

    useNullAsDefault: true
}