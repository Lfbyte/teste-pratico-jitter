
 const Sequelize = require('sequelize')
 const conexao = require('./database')


 const Items = conexao.define('items',{

    items:{
        type: Sequelize.JSON,
        allowNull: false
    }
 })


 Items.sync({force: false}).then(()=> console.log('Items criado'))

 module.exports = Items