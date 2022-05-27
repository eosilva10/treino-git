const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'OLÁ MUNDO, ESTPU FUNCIONANDO!'});
})

app.listen(3001, ()=> {
    console.log('-- API RODANDO NA PORTA 3001 --');
})