import banco from '../db.js';

const buscarClientesAniversariantes = (req, res) => {
    const mes = req.params.mes;
    const query = 'SELECT * FROM barbearia.clientes WHERE MONTH(dtNascimento) = ? ORDER BY DAY(dtNascimento)';

    banco.query(query, [mes], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data);
    });
};

export default buscarClientesAniversariantes;