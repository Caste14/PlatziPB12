const { application } = require("express");
var express = require ("express");
var app = express();

application.get("/", inicio);
application.get("/", cursos)

function inicio(peticion, resultado)
{
    resultado.send("Home truco")
}

function cursos(peticion, resultado)
{

}

application.listen(49718);