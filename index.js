import express from 'express';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

import cadastrarCliente from './controller/cadastrarcliente.js';
import listarClientes from './controller/listarclientes.js';
import buscarClientes from './controller/buscarclientes.js';
import deletarCliente from './controller/deletarcliente.js';
import alterarCliente from './controller/alterarcliente.js';
import cadastrarCorte from './controller/cadastrarcorte.js';
import listarCortes from './controller/listarcortes.js';
import alterarCorte from './controller/alterarcorte.js';
import deletarCorte from './controller/deletarcorte.js';
import relatorioCortesData from './controller/relatoriocortesdata.js';
import buscarClientesAniversariantes from './controller/buscarclientesaniversariantes.js';
import enviarMala from './controller/enviarmala.js';
import cadastrarCompromisso from './controller/cadastrarcompromisso.js';
import alterarCompromisso from './controller/alterarcompromisso.js';
import listarCompromissos from './controller/listarcompromissos.js';
import deletarCompromisso from './controller/deletarcompromisso.js';

api.listen(8080, () => {
    console.log('Servidor Iniciado...');
});

api.post('/cadastrarcliente', cadastrarCliente);
api.get('/listarclientes', listarClientes);
api.get('/buscarclientes', buscarClientes);
api.put('/alterarcliente', alterarCliente);
api.delete('/deletarcliente/:id', deletarCliente);

api.post('/cadastrarcorte', cadastrarCorte);
api.get('/listarcortes/:idCliente', listarCortes);
api.put('/alterarcorte', alterarCorte);
api.delete('/deletarcorte/:idCorte', deletarCorte)

api.get('/relatoriocortesdata/:dtInicial/:dtFinal', relatorioCortesData);
api.get('/buscarclientesaniversariantes/:mes', buscarClientesAniversariantes);

api.post('/enviar', enviarMala);
api.post('/cadastrar-compromisso', cadastrarCompromisso);
api.put('/alterar-compromisso', alterarCompromisso);
api.get('/listar-compromissos/:data', listarCompromissos);
api.delete('/deletar-compromisso/:id', deletarCompromisso);
