var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("index");
}).listen(8080);

//Programa de ExpressJS del lado del servidor con javascript que ejemplifica la programación estructurada en un archivo para motores de vista Jade.