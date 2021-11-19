const express = require("express");
const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:false}));
app.use(express.urlencoded({extended:true}));;
app.use(express.static('/public'));

app.get("/", function(req,res){
    res.render('formulario');
});

app.post('/results', function(req,res){
   res.send(req.body);
});




app.listen(8081, function(){
    console.log("Aline");
});

