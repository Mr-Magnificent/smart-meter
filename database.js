const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ayush',
    password: '1234',
    database: 'hackind'
});

connection.connect();

connection.end();