const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'OLÁ MUNDO, ESTOU FUNCIONANDO!'});
})

app.get('/ola', (req, res) => {
    res.status(200).send({ message: 'SOU A ROTA OLÁ!'});
})

app.listen(3001, ()=> {
    console.log('-- API RODANDO NA PORTA 3001! --');
})
