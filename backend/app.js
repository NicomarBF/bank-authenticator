// app.js

const express = require('express');
const app = express();
const cors = require('cors');
const accountRoutes = require('./routes/accountRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

const Sincronize = require('./entities/Sincronize'); // Importa o arquivo de sincronização com o banco de dados

app.use(cors({
    methods: ['GET', 'POST'], // Somente permitindo GET e POST
    allowedHeaders: ['Content-Type'], // Somente permitindo o cabeçalho Content-Type
  }));
// Middleware para análise de corpo de solicitação JSON
app.use(express.json());

// Monta as rotas
app.use('/account', accountRoutes);
app.use('/session', sessionRoutes);

// Define a porta do servidor
const PORT = process.env.PORT || 8080;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});