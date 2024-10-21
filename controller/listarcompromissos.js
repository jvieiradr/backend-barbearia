import banco from '../db.js';

const listarCompromissos = (req, res) => {
    const data = req.params.data;
    const query = "SELECT *, DATE_FORMAT(data,'%d/%m/%Y') AS data_formatada FROM barbearia.agenda WHERE data=? ORDER BY hora;";

    banco.query(query, [data], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data);
    });
};

export default listarCompromissos;