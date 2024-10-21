import banco from '../db.js';

const deletarCliente = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM barbearia.clientes WHERE id = ' + id + ';';

    banco.query(query, (erro) => {
        if(erro) return res.status(400).json(erro)
        return res.status(200).json();
    });
};

export default deletarCliente;