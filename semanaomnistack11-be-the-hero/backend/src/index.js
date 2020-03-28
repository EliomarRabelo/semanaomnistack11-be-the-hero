const express = require('express');//criando estrutura de requisição
const cors  = require('cors');
const routes = require('./routes');

const app = express();//criando aplicação

app.use(cors());
app.use(express.json());//especificando a requisição com o formato .json
app.use(routes);

app.listen(3333);//especificando qual porta escutar






/**
 * Rota / recurso
 * 
 * 
 * Métodos http:
 * 
 * GET   : buscar/listar uma informação do back-end
 * POST  : criar uma informação no back-end
 * PUT   : alterra uma informação no bac-and
 * DELETE: deletar uma informação no back-and
 */

/**
* Tipos de parâmetros:
*
* Query params: Parâmetros nomeados enviandos na rota após '?' (Filtros, Paginação)
* Route params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/ 


/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc..
 */

 /**
  * Formas de comunicação com DB
  * 
  * Driver: SELECT * FROM name_table
  * Query Builder: table('user').select('*').where();
  */



/*
app.get('/users',(request,response) => {
    const params = request.params;
    console.log(params);

    return response.json({
        evento: 'Semana omniStack 11.0',
        aluno: 'Eliomar Rabelo'
    });
    //return response.send('Helo world');//send envia uma mensagem para o navegador'cliente'
});
*/
