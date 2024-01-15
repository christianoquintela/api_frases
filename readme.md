//Get unitário
app.get('/:id', (req, res) => {  
 const id = req.params.id;
// console.log('ID: ' + id);
const sql = 'select \* from frases where id_frase = ?';
const values = [id];
//Query com o uso de strings
con.query(sql, values, (err, rows) => {
// console.log(rows);
const [dados] = rows;
// const json = JSON.stringify(dados);
res.json(dados);
});

JWT = jsom web token

# 1 fase do projeto

-   mkdir [nome da pasta] // criar pasta
-   cd [nome da pasta] // mudar para a pasta
-   code . // abrir o vsCode dentro da pasta acima criada
-   ls //mostrar arquivos dentro da pasta
-   ls -la // mostrar todos os arquivos inclusive os ocultos
-   touch README.md // touch é para criar arquivos
-   npm init -y //pula as perguntas

## 2 fase // instalar as dependencias utilizadas no projeto:

-   npm i bcryptjs --save //Vai criar a hash de senha e tbm decodificar.
-   npm i dotenv --save-dev //Usado para salvar dados sensíveis no projeto.
-   npm i express --save // Framework usado para criar api's.
-   npm i jsonwebtoken --save // Usado para manusear o Token.
-   npm i mongoose --save //Pacote de banco de dados utilizado para facilitar o trabalho como mongoDB.
-   npm i nodemon --save-dev //Usado para facilitar a criação das api's, restarta automaticamente após cada alteração.

### lembrar sempre de configurar o express para reconhecer JSON como padrão

-   app.use(express.json());

## 3 retorno de erro

Ao utilizar o return, o inmsonia não fica em loop infinito esperando resposta.
return res.status(400).json({
erro: true,
msg: `MSG de erro ou dado incorreto.`,
});

## 4 retorno de sucesso

Ao utilizar o return, o inmsonia não fica em loop infinito esperando resposta.
return res.status(200).json({
erro: false,
msg: `MSG de sucesso ou dado correto.`,
});

### Minha resposta padrão

//Resposta quando enviar um dado corretamente - evita o loop infinito no inmsonia.
//Comentar sempre que finalizar o http-request.
// return res.status(200).json({
// erro: false,
// myDefault: 'Msg default de confirmação, dados corretos no end point: /auth/user ',
// });
