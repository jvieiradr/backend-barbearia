import banco from '../db.js';

const alterarCompromisso = (req, res) => {
    const query = 'UPDATE barbearia.agenda SET data=?, compromisso=?, hora=? WHERE id=?;';
    const id = req.body.id;
    const data = req.body.data;
    const compromisso = req.body.compromisso;
    const hora = req.body.hora;

    banco.query(query, [data, compromisso, hora, id], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default alterarCompromisso;