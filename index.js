//Libs
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
//Acesso ao bando de dados
import Post from './handlers/insert/post.js';
// import Getter from './handlers/search/getter.js';
import con from './db_con/db.js';
/* ****************************************************************************************************************** */
//utilizando o express como ensinado na devmedia.
const app = express();

/* **************** Usos do express ********************************************************************************* */
app.use(express.json());

/* **************** Posts ******************************************************************************************* */
app.post('/cadastro', (req) => {
    const { titulo, frase, autor } = req.body;

    /* Comentado o jeito de fazer o insert dentro do endpoint cadastro */
    // //strings de dados
    // const sql = 'insert into frases(titulo, frase, autor) values (?,?,?)';
    // const values = [titulo, frase, autor];
    // //Query com o uso de strings
    // connection.query(sql, values);
    //criei uma função com as instruções acima mostradas.
    Post(titulo, frase, autor);
});
/* **************** Fim Posts ******** */

/* **************** Getters ***************************************************************************************** */
app.get('/', (req, res) => {
    //Get com query randômico
    const sql =
        'SELECT id_frase, titulo_frase, frase, autor FROM frases WHERE id_frase >= (SELECT FLOOR(MAX(id_frase) * RAND()) FROM frases) ORDER BY id_frase LIMIT 1';

    //Query com o uso de strings
    con.query(sql, (err, rows) => {
        if (err) {
            res.status(400).json({
                erro: err,
                msg: 'Erro ao tentar acessar dados no DB.',
            });
        }
        // console.log(rows);
        const [dados] = rows;
        // const json = JSON.stringify(dados);
        // console.log(json);
        // res.json(json);
        return res.status(200).json({
            erro: false,
            msg: 'Bem vindo a rota /',
            dados,
        });
    });
});
/* **************** Fim Getters ************************************************************************************* */

/* **************** Puts ******************************************************************************************** */
/* **************** Deletes ***************************************************************************************** */

app.listen(process.env.PORT, () => {
    let data = new Date();
    console.log('Exemplo app escutando na porta! ' + process.env.PORT);
    console.log('Servidor node iniciado em : ' + data);
});
