const sequelize = require('../connection/database');

// Sincroniza os modelos com o banco de dados
const sincronizeDB = async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Tabelas sincronizadas com sucesso');
    } catch (error) {
        console.error('Erro ao sincronizar tabelas:', error);
    }
};

// Chama a função de sincronização
sincronizeDB();