const { Client } = require('pg');

const client = new Client({
    user: 'philchoi',
    host: 'localhost',
    database: 'employee_tracker',
    password: 'Giants4742!',
    port: 5432,
});

client.connect();

module.exports = client;
