'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Compra extends Model {

    static getCamposCompra(){
        return ['valor_compra', 'data_compra', 'fornecedor_id', 'produto_id']
    }

    static getCamposListagem(){
        return ['id', 'valor_compra', 'data_compra', 'fornecedor_id', 'produto_id']
    }

    fornecedor(){
        return this.belongsTo('App/Models/Fornecedor')
    }

    produto(){
        return this.belongsTo('App/Models/Produto')
    }
}

module.exports = Compra
