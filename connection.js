const {Client} = require('pg')

const client = new Client({
    host: "192.168.10.128",
    user: "postgres",
    port: 5432,
    password: "tannguyen@123",
    database: "postgres"
})

module.exports = client