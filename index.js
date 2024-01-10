//Libs
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

//Acesso ao bando de dados
import Post from './handlers/insert/post.js';
// import Getter from './handlers/search/getter.js';
import con from './db_con/db.js';
//Listen na porta 8080
const port = 8080;
//utilizando o express como ensinado na devmedia.
const app = express();

/* **************** Usos do express ******** */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/* **************** FIM Usos do express **** */

/* **************** Posts ******** */
app.post('/cadastro', (req) => {
    const { titulo, frase, autor } = req.body;
    // //strings de dados
    // const sql = 'insert into frases(titulo, frase, autor) values (?,?,?)';
    // const values = [titulo, frase, autor];
    // //Query com o uso de strings
    // connection.query(sql, values);
    //criei uma função com as instruções acima mostradas.
    Post(titulo, frase, autor);
});
/* **************** Fim Posts ******** */

/* **************** Getters ******** */
app.get('/:id', (req, res) => {
    const id = req.params.id;
    // console.log('ID: ' + id);
    const sql = 'select * from frases where id_frase = ?';
    const values = [id];
    //Query com o uso de strings
    con.query(sql, values, (err, rows, fields) => {
        // console.log(rows);
        const [dados] = rows;
        // const json = JSON.stringify(dados);
        res.json(dados);
    });
    
    // res.json({ id: fR[0].id_frase, title: fR[0].titulo, frase: fR[0].frase, autor: fR[0].autor });
});
/* **************** Fim Getters ******** */

/* **************** Puts ******** */
/* **************** Deletes ******** */

app.listen(port, () => {
    let data = new Date();
    console.log('Exemplo app escutando na porta! ' + port);
    console.log('Servidor node iniciado em : ' + data);
});
