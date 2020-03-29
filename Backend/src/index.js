const express = require('express'); //Importa o modulo para variavel
const cors = require('cors');
const routes = require('./routes');

const app = express(); //Criando aplicação, que depois terá rotas, funcionalidades...

app.use(cors());
app.use(express.json());
app.use(routes);

//Rota / Recurso

/*
GET -> Buscar informação
POST -> Criar uma informação no banco
PUT -> Alterar informação no banco
DELETE -> Deletar informação

Tipo de parâmetros:
Query Params -> Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
Route Params -> Parâmetros utilizados para identificar recursos
Request Body -> Corpo da requisição, utilizado para criar ou alterar recursos
*/


app.listen(3333); //Acessar porta 3333 - localhost:3333 vai acessar aplicação