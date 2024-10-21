import nodemailer from 'nodemailer';

const enviarMala = (req, res) => {
    const texto = req.body.texto;
    const destinatario = req.body.destinatario;

    const quantidadeDestinatarios = destinatario.length;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'barbeariakennedy26@gmail.com',
            pass: 'ycnf usug woig xumu'
           /* user: 'jvieiradr1008@gmail.com',
            pass: 'nskvvjefioitrpys'*/
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    for(var i = 0; i < quantidadeDestinatarios; i++) {
        const mailOptions = {
            from: 'jvieiradr1008@gmail.com',
            to: destinatario[i].email,
            subject: 'Saudações Prezado Cliente !!!',
            html: `<h2> ${texto} </h2>`
        };
        
        transporter.sendMail(mailOptions, (err, info) => {
            if(err) return res.status(400).json(err)
            else return res.status(200).json();
        });
    };
};

export default enviarMala;