const knex = require('knex');

const db = knex({
    client: 'pg', // Substituir por 'sqlite3' se necessário
    connection: {
        host: 'localhost',
        user: 'your-username',
        password: 'your-password',
        database: 'biblioteca'
    }
});

module.exports = db;
