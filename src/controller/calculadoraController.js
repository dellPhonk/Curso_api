import { Router } from "express";
const endpoints = Router();

endpoints.get('/calculadora/somar/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let calc = n1 + n2;
    resp.send(`a soma de ${n1} + ${n2} é ${calc}`);
})

export default endpoints;