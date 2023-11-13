/**
 * Bibliotecas externas
 */
const express = require('express');
const cors = require('cors');

/**
 * Instanciando o express
 */
const app = express();

/**
 * Conexão com banco de dados
 */
const conn = require('./db/conn');

const User = require('./models/User')
const Carro = require('./models/User')

/**
 * Rotas
 */
const router = require('./routes/Router');

/**
 * Porta e endereço da aplicação
 */
const port = 5000;


/**
 * Configurando o json no express
 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/', router);

/**
 * Iniciando a conexão com banco de dados junto com o servidor
 */
conn.sync()
.then(() => {
    app.listen(port, () => console.log(`Servidor Iniciado rodando na porta ${port}`));
})
.catch((err) => console.log(err));