import express from 'express';

const servidor = express();

servidor.get('/helloword', (req, resp) => { 
    resp.send('ola mundo');
})

servidor.get('/mensagem/boasvinda', (req,resp) => {
    resp.send('ola sem bem vindes divos');
})

servidor.get('/v2/mensagem/boasvinda', (req,resp) => {
    resp.send('salve bandidagem, malandragi vive');
})

servidor.get('/calculadora/somar/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let calc = n1 + n2;
    resp.send(`a soma de ${n1} + ${n2} é ${calc}`);
})

servidor.listen(5010, () => console.log('Api subida com sucesso na porta 5010!'));