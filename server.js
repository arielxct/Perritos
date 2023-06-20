// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Ivan', raza: "Boyero de Berna", nacio: 2016},
        { name: 'Mia', raza: "Callejero", nacio: 2019},
        { name: 'Juan', raza: "Border Collie", nacio: 2022}
    ];
    var tagline = "Este es mi mini proyecto para mis mascotas y utilizo EJS";

    // muestra en la pagina Index esta variables.
    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page, muestra esta pagina en el lateral.
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.use(express.static('public'));

app.listen(8080);

// console.log('Servidor corriendo en puerto 8080 ');
// console.log('http://localhost:'+PORT)
console.log('http://localhost:'+8080)
