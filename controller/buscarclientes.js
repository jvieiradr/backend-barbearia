import banco from '../db.js';

const buscarClientes = (req, res) => {
    const query = 'SELECT id as value, nome as label, telefone, email, preferenciaCorte FROM barbearia.clientes ORDER BY nome;'

    banco.query(query, (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data);
    });
};

export default buscarClientes;