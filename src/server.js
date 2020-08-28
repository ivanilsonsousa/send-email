const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes');
const app = express();
require('dotenv/config');

app.set('trust proxy', true);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}...`);
})