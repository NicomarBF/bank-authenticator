const sequelize = require('../connection/database');

const Account = require('../entities/Account');
const Session = require('../entities/Session');
const Combinations = require('../entities/Combinations');

// Sincroniza os modelos com o banco de dados
const sincronizeDB = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Tabelas sincronizadas com sucesso');
    } catch (error) {
        console.error('Erro ao sincronizar tabelas:', error);
    }
};

// Chama a função de sincronização
sincronizeDB();