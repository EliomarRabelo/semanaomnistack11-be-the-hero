
const express = require('express');//importação do express

const OngController = require('./controllers/OngController');//importando o controlador de requisição 'ong'
const IncidentsController = require('./controllers/IncidentsController');//importando o controlador de requisição 'incidents'
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();//modulo de rotas do express

//rotas -> ongs
routes.get('/ongs',OngController.index);//rota de listagem
routes.post('/ongs', OngController.create);//rota de criação de ong


//rotas -> session
routes.post('/sessions',SessionController.create);

//rotas -> casos(incidents)
routes.post('/incidents',IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete );

//rotas -> profile
routes.get('/profile',ProfileController.index);




module.exports = routes; //forma no node de exportar alguma variavel de um arquivo
                        //'module.exprorts'