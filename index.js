const express = require('express');
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = 3000;

io.on("connection",(socket)=>{
    // console.log(socket);
    // console.log(socket.id);

    socket.on("disconnect",()=>{
        console.log("X desconectou: "+socket.id);
    });

    socket.on("boasvindas",(data)=>{
        console.log("Executando evento de boas vindas");
        console.log(data);
    })

    socket.on("palavra",(data)=>{
        console.log(data);
        socket.emit("resultado",data + "guia teste");
    })
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
});


http.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

