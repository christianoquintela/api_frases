//Libs
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors'

//Acesso ao bando de dados
import connection from './db_con/db';

const app = express();

/* **************** Usos do express ******** */

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

/* **************** FIM Usos do express **** */

/* **************** Posts ******** */
app.post()
/* **************** Fim Posts ******** */
app.post('/cadastro', (req, res) => {
    const { titulo, frase, autor } = req.body
})
/* **************** Getters ******** */
/* **************** Puts ******** */
/* **************** Deletes ******** */













app.listen(8080, () => {
    let data = new Date();
    console.log("Exemplo app escutando na porta! " + port);
    console.log("Servidor node iniciado em : " + data);
})

