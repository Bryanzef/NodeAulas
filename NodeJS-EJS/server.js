const express = require("express");
const app = express(); //Express guardado na var app


app.set("view engine", "ejs") // falar para o express que vai ser usado o EJS para renderizar o HTML

//Criar uma rota de acesso

app.get("/", function (req, res){
    const items = [
        {
        title : "D",
        message : "esenvolvendo Aplicações/serviços de forma fácil.",
        },
        {
        title : "E",
        message : "JS, USA JAVASCRIPT PARA RENDERIZAR O HTML",
        },
        {
        title : "M",
        message : "uito fácil de usar"
        },
        {
        title : "A",
        message : "prendizado da rockeseat me ajudou a aprender"
        },
        {
        title : "I",
        message : "nstall EJS"
        },
        {
        title : "S",
        message : "uper legal de aprender com a proff"
        },

    ];

    const subtitle = "Uma linguagem de modelagem para criação de página html"
    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitle,
    });
//Irá dar como resposta o index
//Onde será esperado que o index Esteja em um pasta chamada view
});

app.get("/sobre", function (req, res){
    res.render("pages/about") // A função Sobre será chamada

})
//Porta 8080 paa rodar o servidor (localhost:8080)
app.listen(8080);
console.log("Run Server")