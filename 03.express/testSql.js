const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'test'
})

connection.connect()

connection.query('select * from user', (err, rows) => {
    console.log(99, err, rows)
    if (err) throw err
})

connection.end()