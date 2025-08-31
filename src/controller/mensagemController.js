import { Router } from "express";

const endpoints = Router();

endpoints.get('/helloword', (req, resp) => { 
    resp.send({
        mensagem: 'ola mundo'
    });
})

endpoints.get('/mensagem/boasvinda', (req,resp) => {
    resp.send('ola sem bem vindes divos');
})

endpoints.get('/v2/mensagem/boasvinda', (req,resp) => {
    resp.send('salve bandidagem, malandragi vive');
})

export default endpoints;