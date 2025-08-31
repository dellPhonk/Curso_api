import { Router } from "express";
const endpoints = Router();


endpoints.get('/revisao/sexta/:r', (req, resp) => {
    let riqueza = Number(req.params.r);

    resp.send(`A sua riqueza é de ${riqueza}`);
})

endpoints.post('/media', (req, resp) =>{
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;
    let n4 = req.body.nota4;

    let media = (n1 + n2 + n3 + n4) / 4;

    resp.send(`A sua media é ${media}`);
})

export default endpoints;