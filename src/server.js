const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const flash = require('connect-flash');
const session = require('express-session');

//Initializations
const app = express()

//Settings
app.set('port', process.env.PORT || 3000); //Puerto en el que se va a ejecutar
app.set('views', path.join(__dirname, 'views')); //Establece la dirección donde está la carpeta views
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs' 
}));
app.set('view engine', '.hbs'); 


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})); //Cada vez que un formulario envie datos, los envía en formato json
app.use(express.json());
app.use(express.static('public'))
app.use(session({
    secret: 'albe1974#$AIsa',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());



//Static files
app.use(express.static(path.join(__dirname, 'public'))); //Indica a express donde esta la carpeta pública
app.set('views', path.join(__dirname, 'views'));


module.exports = app;