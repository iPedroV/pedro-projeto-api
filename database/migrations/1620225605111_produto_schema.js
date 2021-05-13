'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome', 20).notNullable()
      table.string('descricao', 45)
      table.decimal('peso_bruto').notNullable()
      table.decimal('peso_liquido')
      table.integer('qtd_disponivel')
      table.integer('qtd_min').notNullable()
      table.string('cod_barra', 45).notNullable()
      table.date('data_fabricacao').notNullable()
      table.date('data_vencimento')
      table.decimal('preco').notNullable()
      table.integer('categoria_id').references('id').inTable('categorias').unsigned().notNullable()
      table.integer('marca_id').references('id').inTable('marcas').unsigned().notNullable()
      table.integer('unidade_medida_bruto_id').references('id').inTable('unidades_medidas').unsigned().notNullable()
      table.integer('unidade_medida_liquido_id').references('id').inTable('unidades_medidas').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
