var express = require("express");
app = express();

app.use(express.static(__dirname + "/"));
app.listen(8080);
console.log("Express is listening port 8080");

var users = [
    {  
        email: "xinbo@gmail.com",
        password: "abcde"
    
}];