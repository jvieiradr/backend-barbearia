import banco from '../db.js';

const relatorioCortesData = (req, res) => {
    const query = "SELECT *, DATE_FORMAT(dtCorte,'%d/%m/%Y') AS data_formatada FROM barbearia.cortes WHERE dtCorte BETWEEN ? AND ? ORDER BY dtCorte;";
    const dtInicial = req.params.dtInicial;
    const dtFinal = req.params.dtFinal;

    banco.query(query, [dtInicial, dtFinal ], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data);
    });
};

export default relatorioCortesData;