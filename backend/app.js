// app.js

const express = require('express');
const app = express();
const accountRoutes = require('./routes/accountRoutes');

const Sincronize = require('./entities/Sincronize'); // Importa o arquivo de sincronização com o banco de dados


// Middleware para análise de corpo de solicitação JSON
app.use(express.json());

// Monta as rotas
app.use('/accounts', accountRoutes);

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});