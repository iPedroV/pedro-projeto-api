'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('descricao', 155)
      table.decimal('peso_bruto').notNullable()
      table.integer('qtd_disponivel')
      table.integer('qtd_min').notNullable()
      table.string('cod_barra', 45).notNullable()
      table.date('data_fabricacao').notNullable()
      table.date('data_vencimento')
      table.decimal('preco').notNullable()
      table.integer('categoria_id').references('id').inTable('categorias').unsigned().notNullable()
      table.integer('marca_id').references('id').inTable('marcas').unsigned().notNullable()
      table.integer('unidade_medida_id').references('id').inTable('unidades_medidas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
