const express = require('express');
const app = express();
const port=8081;

const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');

//const bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine({
    layoutsDir:  __dirname + '/views/layouts',
    extname: 'handlebars',
    defaultLayout: 'planb',
    partialsDir: __dirname + '/views/partials'
}));

app.use(express.static('public'));

//app.use(express.urlencoded({extended:true})); // reconhece qualquer tipo além de string

app.get("/", function(req,res){
    res.render('main', {layout: 'planb'});
});

app.post('/results', function(req,res){
    res.send('final', {layout:'index'});
});

app.listen(port, function(){
    console.log("Aline");
});

