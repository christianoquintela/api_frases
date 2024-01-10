import connection from '../../db_con/db.js';

function Getter(id) {
    let infos;
    //strings de dados
    const sql = 'select * from frases where id_frase = ?';
    const values = [id];
    //Query com o uso de strings
    connection.query(sql, values, (err, rows, fields) => {
        // console.log(rows);
        const [dados] = rows;        
        // console.log(teste);
        // console.log(json);
         infos = dados;
    });
    return infos;
}

export default Getter;
