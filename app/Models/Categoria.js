'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    setor(){
        return this.belongsTo('App/Models/Setor')
    }

    static getCamposCategoria(){
        return ['descricao', 'setor_id']
    }
}

module.exports = Categoria
