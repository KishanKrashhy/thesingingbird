var express = require('express');
var app = express();
var handlebars = require('express3-handlebars')
    .create({ defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

/* var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    ];
 */
const fortunes = require('./lib/fortune');

app.use((req,res,next) => {
    res.locals.showTests = app.get('env') !== 'productions' &&
        req.query.test === '1';
    next();
});

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about',{ 
        fortune:fortunes.getfortune(),
        pageTestScript: '/qa/tests-about.js'
     });
});
// 404 catch-all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(8080);
