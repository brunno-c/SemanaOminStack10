
const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.zlegn.mongodb.net/week10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros: 

//Query Parms: request.query usados p/ (filtros, ordenação, paginação, etc...)
//Route Parms: request.parms usado p/ (identificar um recurso na alteração ou remoção )
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

server.listen (3333);
