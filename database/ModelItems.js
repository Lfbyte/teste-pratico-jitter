 
 //Instância de componentes para acesso ao banco de dados
 const Sequelize = require('sequelize')
 const conexao = require('./database')


 const Items = conexao.define('items',{

    items:{
        type: Sequelize.JSON,
        allowNull: false
    }
 })

 //Criação de tabelas
 Items.sync({force: false}).then(()=> console.log('Tabela de Items foi criada'))
 
 //Exportação de módulo
 module.exports = Items
