'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Marca extends Model {
    
    static getCamposMarca(){
        return ['cnpj', 'nome', 'telefone', 'email', 'site']
    }

    static getCamposListagem(){
        return ['id', 'cnpj', 'nome', 'telefone', 'email', 'site']
    }

    produtos(){
        return this.hasMany('App/Models/Produto')
    }

    fornecedores(){
        return this.belongsToMany('App/Models/Fornecedor').pivotTable('marcas_fornecedores')
    }
}

module.exports = Marca
