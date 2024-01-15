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
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

/* **************** Posts ******************************************************************************************* */
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

/* **************** Getters ***************************************************************************************** */
app.get('/', (req, res) => {
    //Get com query randômico
    const sql =
        'SELECT id_frase, titulo_frase, frase, autor FROM frases WHERE id_frase >= (SELECT FLOOR(MAX(id_frase) * RAND()) FROM frases) ORDER BY id_frase LIMIT 1';

    //Query com o uso de strings
    con.query(sql, (err, rows) => {
        // console.log(rows);
        const [dados] = rows;
        // const json = JSON.stringify(dados);
        res.status(200).json(
            {
                erro: false,
                msg: 'Dados inseridos com sucesso! ',
            },
            dados
        );
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
