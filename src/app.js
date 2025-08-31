import express from "express";

const servidor = express();
servidor.use(express.json());

import calculadoraController from './controller/calculadoraController.js';

import exerciciosController from './controller/exerciciosController.js';

import lojaController from './controller/lojaController.js';
import mensagemController from './controller/mensagemController.js';

servidor.use(calculadoraController);
servidor.use(exerciciosController);
servidor.use(lojaController);
servidor.use(mensagemController);


servidor.listen(5010, () => console.log('Api subida com sucesso na porta 5010!'));