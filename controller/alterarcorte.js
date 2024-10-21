import banco from '../db.js';

const alterarCorte = (req, res) => {
    const query = 'UPDATE barbearia.cortes SET dtCorte=?, valor=?, tipoCorte=? WHERE id=?;';

    const dtCorte = req.body.dtCorte;
    const valor = req.body.valor;
    const tipoCorte = req.body.tipoCorte;
    const idCorte = req.body.idCorte;

    banco.query(query, [dtCorte, valor, tipoCorte, idCorte], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default alterarCorte;