const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// configuraciones
app.set('port', 3000);

// inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});