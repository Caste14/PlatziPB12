var cafecito = require("express");
var aplicacion = cafecito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);

//En la primera línea tienes una const al inicio que no me queda claro para qué la utilizas.


//En la línea 6 falta el punto y coma al terminar la línea de codigo " ; "

//En la línea 10 falta el punto y coma " ; "

//En la línea 15 no colocaste nada

//en la línea 18 tu puerto es “49718” cuando debería ser aplicacion.listen(8989);