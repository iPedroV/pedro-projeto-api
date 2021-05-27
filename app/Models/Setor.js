'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Setor extends Model {

    categorias(){
        return this.hasMany('App/Models/Categoria')
    }

    static getCamposSetor(){
        return ['nome']
    }

    static getCamposListagem(){
        return ['id', 'nome']
    }
  
    static get table(){
        return 'setores'
    }
}

module.exports = Setor
