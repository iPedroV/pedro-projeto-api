'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedor extends Model {

    static getCamposFornecedor(){
        return ['nome', 'endereco', 'telefone']
    }

    static get table(){
        return 'fornecedores'
    }

    compras(){
        return this.hasMany('App/Models/Compra')
    }

    marcas(){
        return this.belongsToMany('App/Models/Marca').pivotTable('marcas_fornecedores')
    }
}

module.exports = Fornecedor
