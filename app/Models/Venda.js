'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venda extends Model {

    static getCamposVenda(){
        return ['valor_venda', 'data_venda']
    }

    produtos(){
        return this.belongsToMany('App/Models/Venda').pivotTable('produtos_vendas')
    }
}

module.exports = Venda
