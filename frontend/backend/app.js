const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const policiaisRoutes = require('./routes/policiais');
app.use('/policiais', policiaisRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
