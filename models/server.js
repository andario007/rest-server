const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='/api'

        //Middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        //CORS

        this.app.use(cors());

        //LECTURA Y PARSEO DEL BODY
        this.app.use( express.json() );


        //SERVIR SITIO WEB
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.usuariosPath,require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto :', this.port);
        })
    }

}

module.exports = Server;