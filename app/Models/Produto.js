'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {

    static getCamposProduto(){
        return ['nome', 'descricao', 'peso_bruto', 'peso_liquido', 'qtd_disponivel', 'qtd_min', 'cod_barra',
                'data_fabricacao', 'data_vencimento', 'preco', 'categoria_id', 'marca_id', 'unidade_medida_id']
    }

    unidadeMedida(){
        return this.belongsTo('App/Models/UnidadeMedida')
    }

    //unidadeMedidaLiquido(){
    //    return this.belongsTo('App/Models/UnidadesMedida')
    //}

    categoria(){
        return this.belongsTo('App/Models/Categoria')
    }

    marca(){
        return this.belongsTo('App/Models/Marca')
    }

    compras(){
        return this.hasMany('App/Models/Compra')
    }

    vendas(){
        return this.belongsToMany('App/Models/Venda').pivotTable('produtos_vendas')
    }
}

module.exports = Produto
