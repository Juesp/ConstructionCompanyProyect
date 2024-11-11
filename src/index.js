const app = require('./server');


app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
})

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/politicas', (req, res) => {
    res.render('politicas');
});

app.get('/mision-vision', (req, res) => {
    res.render('mision-vision');
});

app.get('/clientes', (req, res) => {
    res.render('clientes');
});

app.get('/quienes-somos', (req, res) => {
    res.render('quienes-somos');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

app.get('/datos', (req, res) => {
    res.render('datos');
});

app.get('/servicios', (req, res) => {
    res.render('servicios');
});