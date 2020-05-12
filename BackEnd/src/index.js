const express = require('express');
const app = express();
const morgan = require('morgan');

global.lis = [];

// configuraciones
app.set('port', 8000);
app.set('json spaces', 2);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas
app.use('/api/index', require('./routes/index.js'));
app.use('/api/nueva', require('./routes/nueva.js'));
app.use('/api/nombre', require('./routes/nombre.js'));

// inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});