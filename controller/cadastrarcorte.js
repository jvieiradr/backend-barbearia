import banco from '../db.js';

const cadastrarCorte = (req, res) => {
    const query = 'INSERT INTO barbearia.cortes (idCliente, nomeCliente, telefoneCliente, dtCorte, valor, tipoCorte) VALUES (?, ?, ?, ?, ?, ?);';
    
    const idCliente = req.body.idCliente;
    const nomeCliente = req.body.nomeCliente;
    const telefoneCliente = req.body.telefoneCliente;
    const dtCorte = req.body.dtCorte;
    const valor = req.body.valor;
    const tipoCorte = req.body.tipoCorte;

    banco.query(query, [idCliente, nomeCliente, telefoneCliente, dtCorte, valor, tipoCorte], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default cadastrarCorte;