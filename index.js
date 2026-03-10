/****
 * Autor: Luiz Fernando
 * Vaga: Analista de sistemas Jr.
 */


//inicialização e instância do servidor express
const express = require('express')
const app = express()
//objeto de conexão
const conexao = require('./database/database')

//Models
var pedidosModelo = require('./database/ModelPedidos')
const itemsModel = require('./database/ModelItems')

//permitindo express para utilizar json
app.use(express.json())

//rota simples do tipo post com enpoint /order
app.post('/order',(req,res)=>{
    
      let numeroPedido = req.body.numeroPedido
      let valorTotal = req.body.valorTotal
      let dataCriacao = req.body.dataCriacao
      let items = req.body.items

        pedidosModelo.create({

            numeroPedido: numeroPedido,
            valorTotal: valorTotal,
            dataCriacao: dataCriacao
        })
       
        itemsModel.create({

            items:[
                {idItem: items[0]['idItem']},
                {quantidadeItem: items[0]['quantidadeItem']},
                {valorItem: items[0]['valorItem']}

            ]
        })

        res.json({
       "orderId": numeroPedido,
       "value": valorTotal,
       "creationDate": dataCriacao,
       "items":[{

        "productId": items[0]['idItem'],
        "quantity":items[0]['quantidadeItem'],
        "price": items[0]['valorItem']
       }]
    })
      


})










    

































//servidor
app.listen(4000,function(erro){


    if(erro){

        console.log(erro)
    }

    else{

        console.log("Servidor funcionando.")
    }

})