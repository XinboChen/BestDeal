var express = require("express");
var engines = require('consolidate');

app = express();

app.set('views', __dirname + '/app/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html'); 
app.get('*',(req, res)=> {
    res.render("index.html");
});

app.listen(8080);
console.log("Express is listening port 8080");

var users = [
    {  
        email: "xinbo@gmail.com",
        password: "abcde"
    
}];