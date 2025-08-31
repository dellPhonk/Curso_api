import { Router } from "express";
const endpoints = Router();

endpoints.post('/loja/pedido', (req, resp) =>{
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;

    if(parcelas > 1){
        let juros = total * 0.05;
        total += juros;
    }
    if(cupom == 'QUERO50'){
        total -= 50;
    }

    resp.send(`O total é ${total}`);
})

export default endpoints;