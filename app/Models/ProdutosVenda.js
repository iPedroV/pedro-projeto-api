'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProdutosVenda extends Model {

    static getCamposProdutosVenda(){
        return ['produto_id', 'venda_id']
    }
}

module.exports = ProdutosVenda
