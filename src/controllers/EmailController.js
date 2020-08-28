const nodemailer = require('nodemailer');

module.exports = {
  async send(req, res) {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text)
      res.json({ status: "Erro nos parâmetros informados!!!", code: 204 });

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });
    
    let mailOptions = {
      from: "RH Santa Casa <rh2019@stacasa.com.br>",
      to,
      subject,
      text
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("Erro ao enviar o email", err);
        res.json({ status: "Erro ao enviar o email", error: err, code: 500 });
      } else {
        console.log("Email enviado com sucesso!!!");
        res.json({ status: "Email enviado com sucesso!!!", error: err, code: 200 });
      }
    });
  }
}