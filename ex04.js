const express = require('express')
const server = express()

server.route('/clientes')
    .get((req,res)=> res.send('Lista de Clientes'))
    .post((req,res)=> res.send('novo Cliente'))
    .put((req,res)=> res.send('altera Cliente'))
    .delete((req,res)=> res.send('remove Cliente'))

server.listen(3000, ()=> console.log('Executando...'))  