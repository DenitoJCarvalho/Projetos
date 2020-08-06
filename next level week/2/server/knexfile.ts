import path from 'path'



module.exports = {
    client: 'sqlite3',
    connection: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
}