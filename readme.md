
//Get unitário
app.get('/:id', (req, res) => {  
    const id = req.params.id;
          // console.log('ID: ' + id);
    const sql = 'select * from frases where id_frase = ?';
    const values = [id];
    //Query com o uso de strings
    con.query(sql, values, (err, rows) => {
        // console.log(rows);
        const [dados] = rows;
        // const json = JSON.stringify(dados);
        res.json(dados);
    });