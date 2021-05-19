'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UnidadeMedida extends Model {
    
    produtos(){
        return this.hasMany('App/Models/Produto')
    }
    

    static getCamposUnidadesMedida(){
        return ['unidade_medida']
    }
}

module.exports = UnidadeMedida
