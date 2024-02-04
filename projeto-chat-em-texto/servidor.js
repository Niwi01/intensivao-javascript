const http=require('http');
const express = require('express');
const aplicacao=express();

const servidotHttp=http.createServer(aplicacao);
const io=require('socket.io')(servidotHttp);

io.addListener('connection',(socket)=>{
    console.log("Um usuário conectou");
    socket.addListener('nova mensagem',(msg)=>{
        io.emit('nova mensagem',msg);
    })
})

aplicacao.use(express.static('public'));


servidotHttp.listen(1000); //servidor configurado