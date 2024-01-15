import { configDotenv } from 'dotenv';
configDotenv();
//Conexão com banco de dados
import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATA_BASE,
});

export default db;
