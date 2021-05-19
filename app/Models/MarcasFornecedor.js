'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MarcasFornecedor extends Model {

    static get table(){
        return 'marcas_fornecedores'
    }

    static getCamposMarcasFornecedor(){
        return ['marca_id', 'fornecedor_id']
    }
}

module.exports = MarcasFornecedor
