
 const Sequelize = require('sequelize')
 const conexao = require('./database')
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



 Pedidos.sync({force: false}).then(()=>{

    console.log("funcionando")
 })

module.exports = Pedidos