 
 //Criação de conexão com o banco
 const Sequelize = require('sequelize')
 const conexao = require('./database')
 
 //Criação da estrutura de tabelas
 const Pedidos = conexao.define('pedidos',{

    numeroPedido:{
        
        type: Sequelize.STRING,
        allowNull: false
    },

     valorTotal:{

        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
     },

     dataCriacao:{

        type: Sequelize.STRING,
        allowNull: false
     }


    })


 //Criação da Tabela
 Pedidos.sync({force: false}).then(()=>{

    console.log("Tabela de pedidos foi Criada")
 })

//Exportação do módulo para importação posterior
module.exports = Pedidos
