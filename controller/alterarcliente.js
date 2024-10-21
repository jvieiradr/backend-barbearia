import banco from '../db.js';

const alterarCliente = (req, res) => {
    const query = 'UPDATE barbearia.clientes SET nome=?, telefone=?, cep=?, endereco=?, numero=?, bairro=?, cidade=?, email=?, dtNascimento=?, preferenciaCorte=? WHERE id=?;';
    const id = req.body.id;
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const endereco = req.body.endereco;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const email = req.body.email;
    const dtNascimento = req.body.dtNascimento;
    const preferenciaCorte = req.body.preferenciaCorte;

    banco.query(query, [nome, telefone, cep, endereco, numero, bairro, cidade, email, dtNascimento, preferenciaCorte, id], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default alterarCliente;