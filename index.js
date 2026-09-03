const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.get('/produtos', (req, res) => {
  res.status(200).json(prod);
});
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

const prod = [
{id: 1, nome:"notebok", preco: 6700},
{id: 2, nome:"mouse", preco:1200}
]