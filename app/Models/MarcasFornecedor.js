'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MarcasFornecedor extends Model {

    static get table(){
        return 'marcas_fornecedores'
    }
}

module.exports = MarcasFornecedor
