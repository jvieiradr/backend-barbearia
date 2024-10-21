import banco from '../db.js';

const deletarCompromisso = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM barbearia.agenda WHERE id = ' + id + ';';

    banco.query(query, (erro) => {
        if(erro) return res.status(400).json()
        return res.status(200).json();
    });
};

export default deletarCompromisso;