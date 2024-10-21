import banco from '../db.js';

const deletarCorte = (req, res) => {
    const query = 'DELETE FROM barbearia.cortes WHERE id=?;';
    const idCorte = req.params.idCorte;

    banco.query(query, [idCorte], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default deletarCorte;