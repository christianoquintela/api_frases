import connection from '../../db_con/db.js';

function Post(titulo, frase, autor) {
    //strings de dados
    const sql = 'insert into frases(titulo_frase, frase, autor) values (?,?,?)';
    const values = [titulo, frase, autor];
    //Query com o uso de strings

    return connection.query(sql, values);
}

export default Post;
