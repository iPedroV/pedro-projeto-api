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
}

module.exports = Fornecedor
