//Conexão com banco de dados
import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chris',
    password: '0329',
    database: 'portfolio'
})

export default db;