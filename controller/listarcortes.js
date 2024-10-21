import banco from '../db.js';

const listarCortes = (req, res) => {
    const query = 'SELECT * FROM barbearia.cortes WHERE idCliente=? ORDER BY dtCorte;'
    const idCliente = req.params.idCliente;

    banco.query(query, [idCliente], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data);
    });
};

export default listarCortes;